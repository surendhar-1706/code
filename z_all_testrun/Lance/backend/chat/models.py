from django.db import models
from django.db.models.deletion import CASCADE
from accounts.models import Profile
# Create your models here.


class ChatMessage(models.Model):
    user_id = models.CharField(blank=True, default='1', max_length=100)
    name = models.CharField(blank=True, null=True, max_length=100)
    content = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def last_ten(self):
        return ChatMessage.objects.order_by('-timestamp').all()[:10]

    def __str__(self):
        return self.content


class ChatRoom(models.Model):
    user_id_1 = models.CharField(max_length=100, default='1')
    user_id_2 = models.CharField(max_length=100, default='2')
    name = models.CharField(blank=True, max_length=100)
    messages = models.ManyToManyField(ChatMessage, blank=True)

    def __str__(self):
        return self.name
