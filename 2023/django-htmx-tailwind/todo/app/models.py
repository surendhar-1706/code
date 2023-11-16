from django.db import models

# Create your models here.

class Todo (models.Model):

    title = models.CharField(blank=True,null=True,max_length=125,default='hi')

    def __str__(self):
        return self.title

