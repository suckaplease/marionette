from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView, RedirectView

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'marionette.views.home', name='home'),
    # url(r'^marionette/', include('marionette.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^dashboard$', TemplateView.as_view(template_name="index.html"), name="dashboard"),
    url(r'^$', TemplateView.as_view(template_name="index.html"), name="landing"),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/1/', include('apps.api.urls')),
)
