from django.db.models import fields
from . models import *
from . views import *
from rest_framework import serializers


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    skill = SkillSerializer(many=True)

    class Meta:
        model = Post
        fields = '__all__'

    def create(self, validated_data):
        skill_data = validated_data.pop('skill')
        post = Post.objects.create(**validated_data)
        for skill in skill_data:
            Skill.objects.create(post=post, **skill)
        return post
        # def get_skill_data(self, obj):
        #     return SkillSerialzer(instance=obj.id).data


class PostSerializerStaticPage(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id']
