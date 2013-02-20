# Create your views here.

from .models import Thread
from .serializers import ThreadSerializer

from django.contrib.auth.models import User
from django.http import HttpResponse, Http404
from rest_framework.views import APIView
from rest_framework import renderers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import status
from rest_framework import mixins
from rest_framework import generics

from rest_framework import permissions

class ThreadList(generics.ListCreateAPIView):
    model = Thread
    serialize_class = ThreadSerializer

class ThreadDetail(generics.RetrieveUpdateAPIView):
    model = Thread
    serialize_class = ThreadSerializer
