from django.forms import ModelForm, Select,ModelChoiceField
from .models import *
from django.contrib.admin.widgets import AdminDateWidget,AdminTimeWidget

class MeetingForm(ModelForm):
    team_manager = ModelChoiceField(queryset=Profile.objects.none())
    team_lead_primary = ModelChoiceField(queryset=Profile.objects.all())
    team_lead_secondary = ModelChoiceField(queryset=Profile.objects.all())
    member_primary = ModelChoiceField(queryset=Profile.objects.all())
    member_secondary = ModelChoiceField(queryset=Profile.objects.all())
    member_teritary = ModelChoiceField(queryset=Profile.objects.all())
    class Meta:
        model = MeetingsAssigned
        fields = ['date','start_time','end_time','team_manager','team_lead_primary',  'team_lead_secondary','member_primary',
      'member_secondary', 'member_teritary' ]
       
        def __init__(self, *args, **kwargs):
          super().__init__(*args, **kwargs)
          self.fields['team_manager'].queryset = Profile.objects.none()

          if 'team_name' in self.data:
              try:
                  team_name = self.data.get('team_name')
                  print(team_name,'wooooooooooooooo')
                 # self.fields['city'].queryset = Profile.objects.filter(country_id=country_id).order_by('name')
              except (ValueError, TypeError):
                  pass  # invalid input from the client; ignore and fallback to empty City queryset
          elif self.instance.pk:
            print('lolllllll')
          #   self.fields['city'].queryset = self.instance.country.city_set.order_by('name')