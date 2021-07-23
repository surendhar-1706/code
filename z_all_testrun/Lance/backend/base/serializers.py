from django.db.models import fields
from . models import *
from . views import *
from rest_framework import serializers


class SkillSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    skill = SkillSerialzer(many=True)

    class Meta:
        model = Post
        fields = '__all__'
