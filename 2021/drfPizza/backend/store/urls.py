from django.urls import path
from .views import *
urlpatterns =[
    path('api/',ProductListView.as_view(),name='store_home')
]