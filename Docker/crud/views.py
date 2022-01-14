from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *
# Create your views here.


class TaskView(generics.ListCreateAPIView):
    queryset = Tasks.objects.all()
    serializer_class = TaskSerializer
