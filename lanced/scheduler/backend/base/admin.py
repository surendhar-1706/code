from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Profile)
admin.site.register(Team)


@admin.register(AssignedRole)
class AssignedRoleAdmin(admin.ModelAdmin):
   list_display = ['roles','team_id','user_id']


@admin.register(MeetingsAssigned)
class AssignedRoleAdmin(admin.ModelAdmin):
   list_display = ['team_id','date','time']
