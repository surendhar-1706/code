
from django.db import models
from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
# Create your models here.




class Team(models.Model):
    team_name = models.CharField(max_length=25, blank=True, null=True)
    team_id =  models.CharField(blank=True,null=True,max_length=100)

   

 


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=CASCADE)
    first_name = models.CharField(max_length=25, blank=True, null=True)
    last_name = models.CharField(max_length=25, blank=True, null=True)
    mobile_number = models.BigIntegerField(blank=True,null=True)
    office_number = models.BigIntegerField(blank=True,null=True)
    home_number = models.BigIntegerField(blank=True,null=True)
    team = models.ManyToManyField(Team)
    #member_type_field(manager,leader,member)
    def __str__(self):
        return str(self.user)


#user_role
#team_id
#user_id
#team_role


class AssignedRole(models.Model):
    Role_CHOICES =[
        ('primary','primary'),
        ('secondary','secondary'),
        ('teritary','teritary')
    ]
    team_id = models.ManyToManyField(Team)
    user_id = models.ManyToManyField(User)
    roles = models.CharField(max_length=60,choices=Role_CHOICES)
















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