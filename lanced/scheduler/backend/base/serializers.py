from rest_framework import serializers
from .models import *

class MeetingAssignedSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeetingsAssigned
        fields = '__all__'