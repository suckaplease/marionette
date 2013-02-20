from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView, RedirectView

from rest_framework.urlpatterns import format_suffix_patterns

from . import views

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # url(r'^$', views.ApiRoot.as_view(), name="api-root"),

    url(r'^threads/$', views.ThreadList.as_view(), name="thread-list"),
    url(r'^threads/(?P<pk>\d+)$', views.ThreadDetail.as_view(), name="thread-detail"),


    # Examples:
    # url(r'^$', 'marionette.views.home', name='home'),
    # url(r'^marionette/', include('marionette.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)


urlpatterns = format_suffix_patterns(urlpatterns)