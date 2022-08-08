from rest_framework import serializers
from .models import *

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields =('team_name',)


class ProfileSerializer(serializers.ModelSerializer):
    # team = TeamSerializer(many=True)
    class Meta:
        model = Profile
        fields = '__all__'

class MeetingAssignedSerializer(serializers.ModelSerializer):
    team_manager = ProfileSerializer(many=True)
    team_lead_primary = ProfileSerializer(many=True)
    team_lead_secondary = ProfileSerializer(many=True)
    member_primary = ProfileSerializer(many=True)
    member_secondary = ProfileSerializer(many=True)
    member_teritary = ProfileSerializer(many=True)
    class Meta:
        model = MeetingsAssigned
        fields =  '__all__'




#  fields =  ['id','date','start_time','end_time','team_manager','team_lead_primary',  'team_lead_secondary','member_primary',
#       'member_secondary', 'member_teritary' ]