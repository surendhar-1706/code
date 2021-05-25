
from django.urls import path
from django.urls.conf import include
from .views import *
from rest_framework import routers
router = routers.DefaultRouter()
router.register('todo', TodoView,'todo')

urlpatterns = [

   path('api/',include(router.urls))
]
