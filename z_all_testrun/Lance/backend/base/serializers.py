from django.db.models import fields
from . models import *
from . views import *
from rest_framework import serializers


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    print('Running post serializer')
    skill = SkillSerializer(many=True)

    class Meta:
        model = Post
        fields = '__all__'

    def create(self, validated_data):
        skill_data = validated_data.pop('skill')
        post = Post.objects.create(**validated_data)
        for skill in skill_data:
            print(skill, 'printing skill from serializer')
            skill, created = Skill.objects.get_or_create(name=skill['name'])
            post.skill.add(skill)
        return post


class PostSerializerStaticPage(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id']
