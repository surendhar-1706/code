from django.urls import path,include
from .views import *
from rest_framework import routers
router = routers.DefaultRouter()
router.register(r'checkout',MeetingAssignedViewSet,basename='calculate_price')
urlpatterns = [
   	path('api/', include(router.urls)),
    path('', meeting, name='meeting_form'),
    path('scheduled_meets',return_scheduled_meets,name='scheduled_meets'),
      path('team_members',return_team_members,name='team_members')
]