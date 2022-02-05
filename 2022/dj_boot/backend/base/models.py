from django.db import models

# Create your models here.

class Todo(models.Model):
    task = models.TextField(null=True,blank=True,max_length=128)

    def __str__(self):
	    return self.task