
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from .serializers import MeetingAssignedSerializer
from .forms import MeetingForm
from .models import *
from rest_framework.response import Response
import datetime
# Create your views here.
def meeting(request):
    if 'term' in request.GET:
        obj = Team.objects.filter(team_name__icontains=request.GET.get('term')) | Team.objects.filter(team_id__icontains = request.GET.get('term'))
        name_list = list()
        for team in obj:
            name_list.append(team.team_name)
        return JsonResponse(name_list,safe=False)
    form = MeetingForm()
    context ={'form':form}
    return render(request,'base/meetingform.html',context)

def return_scheduled_meets(request):
    return JsonResponse({'scheduled_meets':'scheduled_meets'})

def return_team_members(request):
    if 'team_name' in request.GET:
        team_name = request.GET.get('team_name')
        team = Team.objects.filter(team_name__icontains=team_name).first()
        obj =  Profile.objects.filter(team = team)
       
    return JsonResponse(list(obj.values('id','user_id')),safe=False)


class MeetingAssignedViewSet(viewsets.ModelViewSet):
    queryset = MeetingsAssigned.objects.all()
    serializer_class = MeetingAssignedSerializer
   

class MeetingCreateView(APIView):
    def post(self, request):
        print(request.data['team_name'],'-----------------------------------------')
        team_manager = Profile.objects.filter(user_id = request.data['team_manager']).first()
        team_lead_primary = Profile.objects.filter(user_id = request.data['team_lead_primary']).first()
        team_lead_secondary = Profile.objects.filter(user_id = request.data['team_lead_secondary']).first()
        member_primary = Profile.objects.filter(user_id = request.data['member_primary']).first()
        member_secondary = Profile.objects.filter(user_id = request.data['member_secondary']).first()
        member_teritary = Profile.objects.filter(user_id = request.data['member_teritary']).first()
        # obj = MeetingsAssigned.objects.create( 
        # team_manager = team_manager,
        # team_lead_primary = team_lead_primary,
        # team_lead_secondary =team_lead_secondary ,
        # member_primary =member_primary ,
        # member_secondary = member_secondary,
        # member_teritary = member_teritary,

        # )
        date = datetime.datetime.strptime(request.data['date'], "%m/%d/%Y").strftime("%Y-%m-%d")
        start_time = datetime.datetime.strptime(request.data['start_time'], "%I:%M %p")
        start_time = datetime.datetime.strftime(start_time, "%H:%M")
        end_time = datetime.datetime.strptime(request.data['end_time'], "%I:%M %p")
        end_time = datetime.datetime.strftime(end_time, "%H:%M")
       
        obj = MeetingsAssigned.objects.create(
            date = date,
            start_time =start_time ,
            end_time = end_time,
            team_id = Team.objects.filter(team_name = request.data['team_name']).first()
        )
        # print(obj)
        return JsonResponse({'error':'error'})