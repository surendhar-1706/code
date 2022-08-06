from django.db import models
import random
import string
from .get_state import *
from django.core.validators import MinLengthValidator,MaxLengthValidator
# Create your models here.
length = 10





def quote_id():
        while True:
             code = ''.join(random.choices(string.ascii_letters + string.digits,k=length))
             if Quote.objects.filter(quote_number=code).count() == 0:
                 break
        return code

choices_func = states()
class Quote(models.Model):
    
    CHOICES = choices_func
    quote_number = models.CharField(
        max_length=25, default=quote_id, unique=True)
    owner = models.ForeignKey('auth.User', related_name='auth_user', on_delete=models.CASCADE)
    effective_date = models.DateField()
    previous_policy_cancelled = models.BooleanField()
    owns_property = models.BooleanField()
    state = models.CharField(max_length=30,choices=CHOICES)
    zip = models.CharField(max_length=6,validators=[MaxLengthValidator(6),MinLengthValidator(6)])


