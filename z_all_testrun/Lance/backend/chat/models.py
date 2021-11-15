from django.db import models

# Create your models here.


class ChatMessage(models.Model):
    content = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def last_ten(self):
        return ChatMessage.objects.order_by('-timestamp').all()[:10]
