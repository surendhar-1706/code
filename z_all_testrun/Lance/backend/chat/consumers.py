import json
from channels.generic.websocket import WebsocketConsumer
from channels.generic.websocket import AsyncWebsocketConsumer
from django.http import (HttpResponse, HttpResponseBadRequest,
                         HttpResponseForbidden)
from asgiref.sync import async_to_sync
from channels.db import database_sync_to_async
from .models import *
from rest_framework_simplejwt.backends import TokenBackend
from accounts.models import Profile
# store profile object
my_id = None
other_user_id = None
# store id from methods
my_real_id = ''
other_guys_real_id = ''


class ChatConsumer(AsyncWebsocketConsumer):

    def save_message(self, message):
        print('save_message_ran')
        print(message['message'])

    def get_user(self, token):
        print('get_user-------')
        # print(token)
        valid_data = TokenBackend(
            algorithm='HS256').decode(token, verify=False)
        # print(valid_data)
        user = valid_data['user_id']
        my_real_id = user
        profile = Profile.objects.get(user=user)
        my_id = user
        # print('my_id------->printing my id', my_id)
        return profile, user

    def set_name(self, profile):
        return profile.user.name

    def get_other_user(self, id):
        print('get_other_user-------------')
        profile = Profile.objects.get(user=id)
        return profile

    def check_user_and_room(self, room_name, my_id, other_user_id):
        print('chek_user_and_romm------------')
        print(my_id)
        print(other_user_id)
        if not ChatRoom.objects.filter(name=room_name).exists():
            # create the room with the users information forwarded with your request
            ChatRoom.objects.create(
                user1=my_id, user2=other_user_id, name=room_name)
            print('new chat romm created-----------')
        else:
            print(' chat romm exists----------')
        room = ChatRoom.objects.get(name=room_name)
        if my_id != room.user1 and other_user_id != room.user2:
            return HttpResponseBadRequest()

    async def connect(self):

        auth_token = self.scope['url_route']['kwargs']['auth_token']
        my_profile, my_id = await database_sync_to_async(self.get_user)(auth_token)

        other_user_id = self.scope['url_route']['kwargs']['user']
        other_user_profile = await database_sync_to_async(self.get_other_user)(other_user_id)
        self.room_group_name = 'chat_'+str(my_id)+other_user_id
        room = await database_sync_to_async(self.check_user_and_room)(self.room_group_name, my_profile, other_user_profile)
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

        profile = await database_sync_to_async(self.get_user)(text_data_json['token'])
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
