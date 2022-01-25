from unicodedata import name
from django.db import models

# Create your models here.
class testdata(models.Model):
    name = models.CharField(max_length=120)
    date = models.DateField(auto_now_add=True)