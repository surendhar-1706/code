from django.urls import path,include
from .views import *
from rest_framework import routers
router = routers.DefaultRouter()
router.register(r'meet',MeetingAssignedViewSet,basename='meet')

urlpatterns = [
   	path('api/', include(router.urls)),
    path('', meeting, name='meeting_form'),
    path('scheduled_meets',return_scheduled_meets,name='scheduled_meets'),
    path('team_members',return_team_members,name='team_members'),
    path('post/data', MeetingCreateView.as_view()),
    path('current_meeting/<str:pk>',MeetingRetrive.as_view(),name='current_meeting')
       
]