from django.db import models

# Create your models here.


class Tasks(models.Model):
    name = models.TextField(blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
