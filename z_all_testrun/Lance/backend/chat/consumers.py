# obj = ChatMessage.objects.create(content=message_extract)
from django.http import (HttpResponse, HttpResponseBadRequest,
                         HttpResponseForbidden)
import json
from channels.generic.websocket import WebsocketConsumer
from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import async_to_sync
from channels.db import database_sync_to_async
from .models import *
from rest_framework_simplejwt.backends import TokenBackend
from accounts.models import Profile
from django.contrib.auth import get_user_model
User = get_user_model()


class ChatConsumer(AsyncWebsocketConsumer):

    def save_message(self, message):
        print('save_message_ran')
        print(message['message'])

    def get_user(self, token):
        valid_data = TokenBackend(
            algorithm='HS256').decode(token, verify=False)
        user = valid_data['user_id']
        self.my_id = user
        profile = Profile.objects.get(user=user)
        return profile

    def set_name(self, profile):
        return profile.user.name

    def check_user_and_room(self, room_name, my_id, other_user_id):
        print('chek_user_and_romm------------')
        print(my_id)
        print(other_user_id)
        if not ChatRoom.objects.filter(room_name=room_name).exists():
            # create the room with the users information forwarded with your request
            ChatRoom.objects.create(
                user_id_1=my_id, user_id_2=other_user_id, room_name=room_name)
            print('new chat romm created-----------')
        else:
            print(' chat romm exists----------')
        room = ChatRoom.objects.get(room_name=room_name)
        if my_id != room.user_id_1 and other_user_id != room.user_id_2:
            print('Relevant users dont exists------------------------')

    async def connect(self):
        # other_user_id = self.scope['url_route']['kwargs']['other_user_id']
        # my_id = self.scope['url_route']['kwargs']['my_id']
        # self.my_id = my_id
        # self.room_group_name = 'chat_'+str(self.my_id)+'_'+other_user_id
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        temp_array = self.room_name.split('_')
        self.my_id = temp_array[0]
        other_user_id = temp_array[1]
        await database_sync_to_async(self.check_user_and_room)(self.room_group_name, self.my_id, other_user_id)
        # Join room group
        # test_var = 'chat_1_2'
        # one = test_var.split('_')
        # print('the_one---------------------', one[1])

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
        print('running receive---------------------------')
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
        print('nahiiiiiiiiiii-')
        await database_sync_to_async(obj.save)()

    # Receive message from room group
    async def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))
