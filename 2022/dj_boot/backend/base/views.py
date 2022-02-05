from asyncio import tasks
from django.shortcuts import render
from .models import *
# Create your views here.

def renderindex(request):
   
    object = Todo.objects.all()
    context = {'tasks':object}
    return render(request,'base/index.html',context) 