
from django.shortcuts import render
from rest_framework import generics
from . models import *
from . serializers import *

# Create your views here.


class ArticleList(generics.ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetail(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
