from django.shortcuts import render
from .models import *
from rest_framework import viewsets,mixins
from .serializers import *
from rest_framework.permissions import *
# Create your views here.
class QuoteViewSet(mixins.CreateModelMixin,viewsets.GenericViewSet):
    
   
    permission_classes=[IsAuthenticated]
    queryset = Quote.objects.all()
    serializer_class  = QuoteSerializer
    def perform_create(self, serializer_class):
        serializer_class.save(owner=self.request.user)
