from django.contrib import admin
from .models import *
# Register your models here.


class CustomAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'is_staff', 'is_active')


admin.site.register(UserAccount, CustomAdmin)
