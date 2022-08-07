from django.urls import path,include
from . import views
from rest_framework import routers
from .views import *
from dj_rest_auth.registration.views import RegisterView 
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
router = routers.DefaultRouter()
#include viewset urls

router.register(r'checkout',CheckoutViewSet,basename='calculate_price') # endpoint to get prices based on id
router.register(r'quote',QuoteViewSet,basename='quote' ) #endpoint to create quote object

#the previous url contains view has serializer that returns quote number the below has serializer that doesnt return quote_nubmer
router.register(r'quoteview',QuoteOtherEndPointsViewSet,basename='quotes' ) #endpoint to retrive,delete quote object

urlpatterns = [
	
    #include router urls
	path('', include(router.urls)),
	# Schema
    #Dependency for drf-spectacular  avoid removing it
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    # Documentation api's
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),

    #regsiter_user
    path('add-new-user',RegisterView.as_view())
]

