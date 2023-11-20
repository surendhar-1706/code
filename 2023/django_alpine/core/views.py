from django.shortcuts import render
from .models import Todo
from rest_framework import routers, serializers, viewsets

# Create your views here.

def index(request):
    return render(request,'index.html')



# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ['id','title']

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = UserSerializer

