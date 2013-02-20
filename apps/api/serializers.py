from . import models
from django.forms import widgets
from rest_framework import serializers
from .models import Thread

class ThreadSerializer(serializers.HyperlinkedModelSerializer):
    #messages = serializers.ManyHyperlinkedReleatedField(view_name="thread-detail")

    platform = serializers.ChoiceField(choices=models.PLATFORM_CHOICES)

    class Meta:
        model = Thread
        fields = ('url', 'created_timestamp', 'updated_timestamp','platform')