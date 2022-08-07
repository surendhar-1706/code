from rest_framework import serializers
from .models import *
# from django.contrib.auth.models import User


class QuoteSerializer(serializers.HyperlinkedModelSerializer):
# convert all Quote data to json

        

    class Meta:
        model = Quote
        read_only_fields = [('quote_number')]
        fields = ['id','quote_number','effective_date','previous_policy_cancelled','owns_property','state','zip',]


# class QuoteSerializer_without_quote(serializers.HyperlinkedModelSerializer):
    
# # convert all Quote data to json
#     class Meta:
#         model = Quote
#         fields = ['id','effective_date','previous_policy_cancelled','owns_property','state','zip',]
