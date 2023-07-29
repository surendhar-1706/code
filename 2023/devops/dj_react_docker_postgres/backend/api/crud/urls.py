from rest_framework.routers import DefaultRouter
from crud.views import TodoViewSet


router = DefaultRouter()
router.register(r'todo', TodoViewSet, basename='todo')

urlpatterns = router.urls
