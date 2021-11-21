from django.contrib import admin

# Register your models here.
from .models import *


admin.site.register(ChatMessage)
admin.site.register(ChatRoom)


# class CustomAdmin(admin.ModelAdmin):
#     list_display = ('user1',
#                     'user2', 'name')


# admin.site.register(ChatRoom, CustomAdmin)
