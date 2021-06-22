from django.urls import path
from .views import *
urlpatterns = [
    path('realtor/', RealtorListView.as_view()),
    path('realtor/<pk>/', RealtorView.as_view()),
    path('realtor/topseller/', TopSellerView.as_view()),
    path('listing/', ListingsView.as_view()),
    path('listing/search/', SearchView.as_view()),
    path('listing/<slug>/', ListingView.as_view()),
     path('contacts/', ContactCreateView.as_view()),
]
 