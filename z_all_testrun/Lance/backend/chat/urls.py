from django.urls import path

from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('<str:room_name>/', room, name='room'),
    # from here its for api
    path('api/last_ten/', ChatListview.as_view()),
]
