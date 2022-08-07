from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
# Create your models here.


class Team(models.Model):
    team_name = models.CharField(max_length=25, blank=True, null=True)
    team_id =  models.CharField(blank=True,null=True,max_length=100)
    def __str__(self):
        return str(self.team_name)

class Profile(models.Model):
    user_id = models.CharField(max_length=8)
    first_name = models.CharField(max_length=25, blank=True, null=True)
    last_name = models.CharField(max_length=25, blank=True, null=True)
    mobile_number = models.BigIntegerField(blank=True,null=True)
    office_number = models.BigIntegerField(blank=True,null=True)
    home_number = models.BigIntegerField(blank=True,null=True)
    team = models.ManyToManyField(Team)
    def __str__(self):
        return str(self.user_id)



class MeetingsAssigned (models.Model):
    date = models.DateField(blank=True,null=True)
    start_time = models.TimeField(blank=True,null=True)
    end_time = models.TimeField(blank=True,null=True)
    team_id = models.ForeignKey(Team,on_delete=CASCADE,related_name='meeting_team_id')
    #get_name instead of id
    team_manager = models.ManyToManyField(Profile,related_name="team_manager",blank=True)
    team_lead_primary = models.ManyToManyField(Profile,related_name="team_leader_primary",blank=True)
    team_lead_secondary = models.ManyToManyField(Profile,related_name="team_leader_secondary",blank=True)
    member_primary = models.ManyToManyField(Profile,related_name="member_primary",blank=True)
    member_secondary = models.ManyToManyField(Profile,related_name="member_secondary",blank=True,default = "")
    member_teritary = models.ManyToManyField(Profile,related_name="member_teritary",blank=True)
    member = models.ManyToManyField(Profile,related_name="members",blank=True)
 




class TeamMember(models.Model):
    team = models.ForeignKey(Team,on_delete=CASCADE)
    member= models.ManyToManyField(Profile)
    def __str__(self):
         return str(self.team)



#user
# user_id(pk)
# user_name
# contact(3)
# teams_id(dummy)

#oncall_name
#meeting_assigined(with id as primary instead of user name)




#todo
#show user availability
#team name from profile column
#column to who is available and who is not





















# class AssignedRole(models.Model):
#     meeting = models.ForeignKey(MeetingsAssigned,on_delete=CASCADE,related_name='assigned_meeting')
#     team_manager = models.ManyToManyField(Profile,related_name="team_manager",blank=True)
#     team_lead_primary = models.ManyToManyField(Profile,related_name="team_leader_primary",blank=True)
#     team_lead_secondary = models.ManyToManyField(Profile,related_name="team_leader_secondary",blank=True)
#     member_primary = models.ManyToManyField(Profile,related_name="member_primary",blank=True)
#     member_secondary = models.ManyToManyField(Profile,related_name="member_secondary",blank=True)
#     member_teritary = models.ManyToManyField(Profile,related_name="member_teritary",blank=True)
 


    # Role_CHOICES =[   
    #     ('Member','Member'),
    #     ('Primary member','Primary member'),
    #     ('Secondary member','Secondary member'),
    #     ('Teritary member','Teritary member'),
    #     ('Primary lead','Primary lead'),
    #     ('Secondary lead','Secondary lead'),
    #     ('Manager','Manager')
    # ]
    #roles = models.CharField(max_length=60,choices=Role_CHOICES)
