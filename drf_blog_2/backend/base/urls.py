from .views import *
from django.urls import path
urlpatterns =[
    path('',ProductList.as_view())
]