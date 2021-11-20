from django.db import models
from django.db.models.deletion import CASCADE
from accounts.models import Profile
# Create your models here.


class ChatMessage(models.Model):
    profile = models.ForeignKey(Profile, on_delete=CASCADE, default=1)
    name = models.CharField(blank=True, null=True, max_length=100)
    content = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def last_ten(self):
        return ChatMessage.objects.order_by('-timestamp').all()[:10]

    def __str__(self):
        return self.content


class ChatRoom(models.Model):
    user1 = models.ForeignKey(
        Profile, on_delete=CASCADE, default=1, related_name='user1')
    user2 = models.ForeignKey(
        Profile, on_delete=CASCADE, default=2, related_name='user2')
    name = models.CharField(blank=True, max_length=100)

    def __str__(self):
        return self.name
