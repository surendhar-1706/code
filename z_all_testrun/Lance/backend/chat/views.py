from django.shortcuts import render
from rest_framework import generics, pagination
# Create your views here.
from rest_framework.views import APIView
from django.shortcuts import render
from .models import *
from .serializers import *
from .pagination import *
from rest_framework.views import APIView


def index(request):
    return render(request, 'chat/index.html')


def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name': room_name
    })


# class ChatListview(generics.ListAPIView):
#     queryset = ChatMessage.objects.order_by('-id').all()
#     serializer_class = ChatSerializer
#     pagination_class = ChatPaginator

class ChatListview(APIView):
    def get(self, request):
        queryset = ChatMessage.objects.order_by('-id').all()
        paginator = ChatPaginator()
        response = paginator.generate_response(
            queryset, ChatSerializer, request)
        print(request)
        return response
