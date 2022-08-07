from django.forms import ModelForm, Select,ModelChoiceField
from .models import *
from django.contrib.admin.widgets import AdminDateWidget,AdminTimeWidget

class MeetingForm(ModelForm):
    team_manager = ModelChoiceField(queryset=Profile.objects.all())
    team_lead_primary = ModelChoiceField(queryset=Profile.objects.all())
    team_lead_secondary = ModelChoiceField(queryset=Profile.objects.all())
    member_primary = ModelChoiceField(queryset=Profile.objects.all())
    member_secondary = ModelChoiceField(queryset=Profile.objects.all())
    member_teritary = ModelChoiceField(queryset=Profile.objects.all())
    class Meta:
        model = MeetingsAssigned
        fields = ['date','start_time','end_time','team_manager','team_lead_primary',  'team_lead_secondary','member_primary',
      'member_secondary', 'member_teritary' ]
        # widgets={
        #     'date':AdminDateWidget(attrs={'type': 'date'}),
        #     'start_time':AdminTimeWidget(attrs={'type': 'time'}),
        #     'end_time':AdminTimeWidget(attrs={'type': 'time'}),
       
        # }