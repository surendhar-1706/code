from .models import Product
from .serializers import ProductSerialzier
from django.shortcuts import render
from rest_framework import generics


# Create your views here.
class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerialzier
