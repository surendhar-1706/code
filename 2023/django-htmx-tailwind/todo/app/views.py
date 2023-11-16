from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import serializers, viewsets
from .models import Todo
# Create your views here.
def todos(request):
    all_todos = Todo.objects.all()
    return render(request,'todo/todo.html',{'todos':all_todos})


# Serializers define the API representation.
class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ['title']
        
# ViewSets define the view behavior.
class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

def add_todo(request):
    title = request.POST.get('title')
    context = {}
    if title:
        todo  = Todo.objects.create(title=title)
        print(todo,'--------------------------')
        context = {
            'todo':todo
        }
    return render(request,'todo/partial/todo.html',context)