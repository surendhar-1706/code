"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from dj_rest_auth.views import PasswordResetView, PasswordResetConfirmView
from dj_rest_auth.registration.views import RegisterView, VerifyEmailView
from .views import *
from django.conf.urls import url
from rest_framework_swagger.views import get_swagger_view
from django.views.generic import TemplateView, RedirectView
schema_view = get_swagger_view(title='Upwork')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('api/', include('base.urls')),
    path('chat/', include('chat.urls')),
    # restframework url
    path('api-auth/', include('rest_framework.urls')),
    # dj rest auth
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls')),
    # rest auth social
    path('auth/google/', GoogleLogin.as_view()),
    path('accounts/', include('allauth.urls'), name='socialaccount_signup'),
    # swagger
    path('', schema_view),
    url(r'^', include('django.contrib.auth.urls')),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
