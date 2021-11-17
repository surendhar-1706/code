import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from channels.db import database_sync_to_async
from .models import ChatMessage


class ChatConsumer(WebsocketConsumer):

    def fetch_messages(self, data):
        print('running fetch messages')
        return

    def new_message(self, data):
        return

    def messages_to_json(self, messages):
        return

    def message_to_json(self, message):
        return

    def save_message(self, message):
        print('save_message_ran')
        print(message['message'])
        message_extract = message['message']
        obj = ChatMessage.objects.create(content=message_extract)
    commands = {
        'fetch_messages': fetch_messages,
        'new_message': new_message,
        'save_message': save_message
    }

    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket

    def receive(self, text_data):
        text_data_json = json.loads(text_data)

        message = text_data_json['message']
        # print(text_data_json)
        # self.commands[text_data_json['save_message']](self, text_data_json)
        # Send message to room group
        self.commands['save_message'](self, text_data_json)
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )
        # save = save_messages()

    # Receive message from room group
    def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        async_to_sync(self.send(text_data=json.dumps({
            'message': message
        })))
