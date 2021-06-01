from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import *
from .serializers import PostSerializer
from rest_framework.permissions import BasePermission, SAFE_METHODS

class PostUserPermissinos(BasePermission):
    message ='Only  to post creators'
    def has_object(self,request,view,obj):

     if request.method in SAFE_METHODS:
        return True
     return obj.author == request.user 

    
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [PostUserPermissinos]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    c