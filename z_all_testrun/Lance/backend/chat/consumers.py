# obj = ChatMessage.objects.create(content=message_extract)
import json
from channels.generic.websocket import WebsocketConsumer
from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import async_to_sync
from channels.db import database_sync_to_async
from .models import ChatMessage
from rest_framework_simplejwt.backends import TokenBackend
from accounts.models import Profile


class ChatConsumer(AsyncWebsocketConsumer):

    def save_message(self, message):
        print('save_message_ran')
        print(message['message'])

    def get_user(self, text_data_json):
        token = text_data_json['token']
        print(token)
        valid_data = TokenBackend(
            algorithm='HS256').decode(token, verify=False)
        print(valid_data)
        user = valid_data['user_id']
        profile = Profile.objects.get(user=user)
        return profile

    def set_name(self, profile):
        return profile.user.name

    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        # self.commands[text_data_json['save_message']](self, text_data_json)
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )

        profile = await database_sync_to_async(self.get_user)(text_data_json)
        name = await database_sync_to_async(self.set_name)(profile)
        obj = ChatMessage(
            content=message, profile=profile, name=name)
        await database_sync_to_async(obj.save)()

    # Receive message from room group
    async def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))
