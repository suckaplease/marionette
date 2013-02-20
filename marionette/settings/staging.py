from .base import *

DEBUG = True


try:
	from .local import *
except ImportError:
	pass

import dj_database_url
DATABASES['default'] = dj_database_url.config()
