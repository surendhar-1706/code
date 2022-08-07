
from django.shortcuts import render
from .models import *
from rest_framework import viewsets,mixins
from .serializers import *
from rest_framework.permissions import *
from drf_spectacular.utils import extend_schema,extend_schema_view
from .rating_algo import checkout_algo
from django.http import JsonResponse
from rest_framework.response import Response
# Create your views here.

@extend_schema_view(

    create=extend_schema(
        summary="Create the quote"),   
    )
class QuoteViewSet(mixins.CreateModelMixin,viewsets.GenericViewSet):
    
    qs=None
    permission_classes=[IsAuthenticated]
    def get_queryset(self):
           if self.request.user.is_superuser:  #if user is superuser send all quote data
                   self.qs = Quote.objects.all()
           else:       #else send quote created by authenticaed user
            self.qs = Quote.objects.filter(owner=self.request.user)
           return self.qs
       
    queryset = get_queryset
    serializer_class = QuoteSerializer
    def perform_create(self, serializer_class):
        serializer_class.save(owner=self.request.user)

@extend_schema_view(
    list=extend_schema(
        summary="List all quotes created by authenticaed user"
    ),
    create=extend_schema(
        summary="Create quotes"
    ),
    retrieve=extend_schema(summary='Retrive quote created by authenticated user based on id'),
    destroy=extend_schema(
        summary= 'Delete Update quote created by authenticated user based on id'
    )
    
    )
class QuoteOtherEndPointsViewSet(mixins.ListModelMixin,mixins.DestroyModelMixin,viewsets.GenericViewSet):
    qs=None
    permission_classes=[IsAuthenticated]
    def get_queryset(self):
           if self.request.user.is_superuser:  #if user is superuser send all quote data
                   self.qs = Quote.objects.all()
           else:       #else send quote created by authenticaed user
            self.qs = Quote.objects.filter(owner=self.request.user)
           return self.qs
       
    queryset = get_queryset
    serializer_class = QuoteSerializer


class CheckoutViewSet(viewsets.ViewSet):

    permission_classes=[IsAuthenticated]
    
    query__set = None
    @extend_schema(request=None, responses=QuoteSerializer,summary='Retrieve price for **alphanumeric key**',)
    def retrieve(self, request, pk=None):     #retrive based on pk(primay_key)    
        
        if self.request.user.is_superuser:  #if user is superuser send all quote data
                   self.query__set = Quote.objects.all()
        else:       #else send quote created by authenticaed user
            self.query__set = Quote.objects.filter(owner=self.request.user)
        
        quote = self.query__set.filter(quote_number=pk).first()
        try:
            quote.previous_policy_cancelled
        except:
            return JsonResponse({'error':"No data found"})  #retrive based on pk(id) and select first result because filter method returns an array
        serializer = QuoteSerializer(quote,context={'request': request})
        checkout = checkout_algo(quote) # call calculator function pass quote object,serialized data of quote object
        return Response(checkout) # return the response