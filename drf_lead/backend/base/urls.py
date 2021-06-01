from rest_framework import routers, urlpatterns
from .views import *
router = routers.DefaultRouter()
router.register('api/leads',LeadViewSet,'leadapi')
urlpatterns = router.urls