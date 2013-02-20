from django.db import models

# Create your models here.

TWITTER = 0
FACEBOOK = 1
PLATFORM_CHOICES = (
    (TWITTER, 'twitter'),
    (FACEBOOK, 'facebook')
)

class Thread(models.Model):
    platform = models.IntegerField(default=TWITTER)
    summary = models.TextField(blank=True)
    created_timestamp = models.DateTimeField(auto_now_add=True)
    udpated_timestamp = models.DateTimeField(auto_now=True)
