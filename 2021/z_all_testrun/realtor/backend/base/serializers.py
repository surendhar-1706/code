from rest_framework import fields, serializers
from .models import *


class RealtorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Realtor
        fields = '__all__'


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('title', 'address', 'city', 'state', 'price', 'sale_type',
                  'home_type', 'bedrooms', 'bathrooms', 'sqft', 'photo_main', 'slug')

        


class listingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'
