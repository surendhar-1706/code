from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.
from .serializers import *
from .models import *
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from django.conf import settings
from rest_framework import filters


class PostListView(generics.ListCreateAPIView):

    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostRetriveView(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostNumberforstaticpagesView(generics.ListAPIView):

    queryset = Post.objects.all()
    serializer_class = PostSerializerStaticPage
    pagination_class = None


class PostSearch(generics.ListAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['^title']
