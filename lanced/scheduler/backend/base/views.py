
from django.http import JsonResponse
from django.shortcuts import render

from .forms import MeetingForm
from .models import *
# Create your views here.
def meeting(request):
    if 'term' in request.GET:
        obj = Team.objects.filter(team_name__icontains=request.GET.get('term')) | Team.objects.filter(team_id__icontains = request.GET.get('term'))
        name_list = list()
        for team in obj:
            name_list.append(team.team_name)
        return JsonResponse(name_list,safe=False)
    form = MeetingForm()
    if request.method == 'POST':
        print(request.POST)
        # form = MeetingForm(request.POST)
        # if form.is_valid():
        #     form.save()
    context ={'form':form}
    return render(request,'base/meetingform.html',context)


def return_scheduled_meets(request):
    return JsonResponse({'scheduled_meets':'scheduled_meets'})


def return_team_members(request):
    if 'team_name' in request.GET:
        team_name = request.GET.get('team_name')
        team = Team.objects.filter(team_name__icontains=team_name).first()
        obj =  Profile.objects.filter(team = team)
        print('yup-----',obj)
    return JsonResponse(list(obj.values('id','user_id')),safe=False)