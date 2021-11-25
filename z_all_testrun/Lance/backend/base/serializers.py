from django.db.models import fields
from . models import *
from . views import *
from rest_framework import serializers
from rest_framework_simplejwt.backends import TokenBackend
from rest_framework.exceptions import ValidationError
from accounts.models import Profile
 

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

    def set_the_user(self, request):
        token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        try:
            valid_data = TokenBackend(
                algorithm='HS256').decode(token, verify=False)
            user = valid_data['user_id']
            profile = Profile.objects.get(user=user)
            # print('printing profile name from serillizer')
            # print(profile)
            request.user = profile
            self.user = request.user

        except ValidationError as v:
            print("validation error", v)
            print('current user ------------', request)

    def create(self, validated_data):
        validated_data["profile"] = self.user
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
