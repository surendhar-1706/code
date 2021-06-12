from .views import *
from django.urls import path
urlpatterns =[
    path('products/',ProductList.as_view()),
    path('products/<int:pk>',Product.as_view())
]
