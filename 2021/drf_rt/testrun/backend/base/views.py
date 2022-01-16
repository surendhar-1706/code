from django.shortcuts import render
from rest_framework import generics
from .serializers import *
# Create your views here.
from . models import *
from rest_framework import viewsets
class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()