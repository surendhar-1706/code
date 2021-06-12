from django.urls import path
from .views import *
urlpatterns = [
    path('', ArticleList.as_view()),
    path('<pk>/', ArticleDetail.as_view())
]
