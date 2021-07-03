from django.contrib import admin
from .models import *
# Register your models here.


class CustomAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'is_staff', 'is_active')


admin.site.register(UserAccount, CustomAdmin)
