from django.urls import path
from .views import *
urlpatterns = [
    path('article/', ArticleList.as_view()),
    path('article/create/', ArticleCreate.as_view()),
    path('article/<pk>/', ArticleDetail.as_view())
]
