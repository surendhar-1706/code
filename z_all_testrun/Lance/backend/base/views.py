from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.
from .serializers import *
from .models import *
from rest_framework import generics


class PostListView(APIView):
    def get(self, request, *args, **kwargs):
        data_object = Post.objects.all()
        serializer = PostSerializer(data_object, many=True)
        return Response(serializer.data)


class PostRetriveView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
