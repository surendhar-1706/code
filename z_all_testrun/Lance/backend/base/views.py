from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.
from .serializers import *
from .models import *
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from django.conf import settings
from .filters import *
from rest_framework import filters
# django_filters
# from django_filters import rest_framework as filters
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend, FilterSet


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
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filter_class = PostFilter
    ordering_fields = ['date_created', 'title']
    # filterset_fields = ('title', 'skill__name')
    # search_fields = ['skill__name', 'title']
