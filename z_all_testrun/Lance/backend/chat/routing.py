from django.urls import re_path
from django.urls import path
from . import consumers

websocket_urlpatterns = [
    # re_path(r'ws/chat/(?P<room_name>\w+)/$', consumers.ChatConsumer.as_asgi()),
    path('ws/chat/<str:user>/<str:auth_token>/',
         consumers.ChatConsumer.as_asgi())
]
