from django.shortcuts import render

# Create your views here.
def meeting(request):
    return render(request,'base/meetingform.html')