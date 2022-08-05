from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Profile)
admin.site.register(Team)
admin.site.register(AssignedRole)
admin.site.register(MeetingsAssigned)
admin.site.register(TeamMember)
# @admin.register(AssignedRole)
# class AssignedRoleAdmin(admin.ModelAdmin):
#    list_display = ['roles','team']


# @admin.register(MeetingsAssigned)
# class AssignedRoleAdmin(admin.ModelAdmin):
#    list_display = ['team','date','time']
