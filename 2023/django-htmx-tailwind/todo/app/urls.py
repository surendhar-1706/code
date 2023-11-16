from django.urls import path,include
from .views import todos,TodoViewSet,add_todo
from rest_framework import routers, serializers, viewsets

urlpatterns = [
path('add_todo/',add_todo),
path('todo/',todos),

]