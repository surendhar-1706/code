
from django.urls import path,include
from .views import *
from rest_framework import routers, serializers, viewsets
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'todo', UserViewSet)
urlpatterns = [
    path('',index),
    path('', include(router.urls)),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),

]
