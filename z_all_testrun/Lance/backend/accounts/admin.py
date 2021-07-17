
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken
from rest_framework_simplejwt.token_blacklist.admin import OutstandingTokenAdmin
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken, BlacklistedToken
from django.contrib import admin
from .models import *
from django.utils.translation import gettext_lazy as _

# Register your models here.


class CustomAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'is_staff', 'is_active')


admin.site.register(UserAccount, CustomAdmin)
