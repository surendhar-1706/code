from django.db import models

# Create your models here.

class Todo(models.Model):
    
    title = models.CharField(blank=True,max_length=125,default='')