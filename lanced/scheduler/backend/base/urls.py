from django.urls import path
from .views import *

urlpatterns = [
    path('', meeting, name='meeting_form'),
]