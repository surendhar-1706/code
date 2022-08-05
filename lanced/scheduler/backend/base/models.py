

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
    user = models.OneToOneField(User, on_delete=CASCADE)
    first_name = models.CharField(max_length=25, blank=True, null=True)
    last_name = models.CharField(max_length=25, blank=True, null=True)
    mobile_number = models.BigIntegerField(blank=True,null=True)
    office_number = models.BigIntegerField(blank=True,null=True)
    home_number = models.BigIntegerField(blank=True,null=True)
    team = models.ManyToManyField(Team,blank=True)
    #member_type_field(manager,leader,member)
    def __str__(self):
        return str(self.user)


#user_role
#team_id
#user_id
#team_role


class AssignedRole(models.Model):
    Role_CHOICES =[   
        ('Member','Member'),
        ('Primary member','Primary member'),
        ('Secondary member','Secondary member'),
        ('Teritary member','Teritary member'),
        ('Primary lead','Primary lead'),
        ('Secondary lead','Secondary lead'),
        ('Manager','Manager')
    ]
    team_id = models.ForeignKey(Team,on_delete=CASCADE,related_name='assigned_team_id') #primary key
    user_id = models.ForeignKey(User,on_delete=CASCADE,related_name='assigned_user_id') #primary key
    roles = models.CharField(max_length=60,choices=Role_CHOICES)
    # def __str__(self):
    #     return str(self.roles)



#meetings assigned
#team_id
#time
#roles

class MeetingsAssigned (models.Model):
    date = models.DateField(blank=True,null=True)
    time = models.TimeField(blank=True,null=True)
    date_time = models.DateTimeField(blank=True,null=True)
    team_id = models.ForeignKey(Team,on_delete=CASCADE,related_name='meeting_team_id')
    roles = models.ManyToManyField(AssignedRole,blank=True)

















#team
#team_id
#lead,manager,member
#

# class Roles(models.Model):
#     Role_CHOICES =[
#         ('primary','primary'),
#         ('secondary','secondary'),
#         ('teritary','teritary')
#     ]
#     team_id = models.ManyToManyField(Team)
    #



#meeting



#   team_manager = models.ManyToManyField(User,related_name="team_manager",blank=True)
#     team_lead_primary = models.ManyToManyField(User,related_name="team_leader_primary",blank=True)
#     team_lead_secondary = models.ManyToManyField(User,related_name="team_leader_secondary",blank=True)
#     member_primary = models.ManyToManyField(User,related_name="member_primary",blank=True)
#     member_secondary = models.ManyToManyField(User,related_name="member_secondary",blank=True)
#     member_teritary = models.ManyToManyField(User,related_name="member_teritary",blank=True)