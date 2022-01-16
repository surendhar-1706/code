from .models import Product
from rest_framework import serializers
from .models import *
class ProductSerialzier(serializers.ModelSerializer):
    class Meta:
     model = Product
     fields= '__all__'