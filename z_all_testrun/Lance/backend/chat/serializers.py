from django.db.models import fields
from rest_framework import serializers
from .models import *


class ChatSerializer(serializers.ModelSerializer):

    class Meta:
        model = ChatMessage
        fields = ('id', 'content',)
