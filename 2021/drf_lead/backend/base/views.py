from django.shortcuts import render

# Create your views here.
from .models import *
from rest_framework import viewsets,permissions
from .serializers import *

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    permission_classes =[permissions.AllowAny]
