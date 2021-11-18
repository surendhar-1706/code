from django.shortcuts import render
from rest_framework import generics, pagination
# Create your views here.
from rest_framework.views import APIView
from django.shortcuts import render
from .models import *
from .serializers import *
from .pagination import *


def index(request):
    return render(request, 'chat/index.html')


def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name': room_name
    })


class ChatListview(generics.ListAPIView):
    # last_ten = ChatMessage.objects.order_by('timestamp').all()[::-1]
    # # last_ten_in_ascending_order = reversed(last_ten)
    # print('ChatList view ran------------------>')
    # queryset = last_ten
    queryset = ChatMessage.objects.order_by('-id').all()
    serializer_class = ChatSerializer
    pagination_class = ChatPaginator
