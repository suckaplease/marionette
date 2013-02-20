from .base import *

DEBUG = True
INSTALLED_APPS = list(INSTALLED_APPS) + ['devserver', 'devserver','debug_toolbar',]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'tmp.db',
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '',
    }
}

try:
	from .local import *
except ImportError:
	pass
