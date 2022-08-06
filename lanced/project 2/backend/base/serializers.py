from rest_framework import serializers
from .models import *
# from django.contrib.auth.models import User


class QuoteSerializer(serializers.HyperlinkedModelSerializer):
    # effective_date = serializers.DateField(format='%d-%m-%Y')
# convert all Quote data to json
    class Meta:
        model = Quote
        fields = ['effective_date','previous_policy_cancelled','owns_property','state','zip',]
