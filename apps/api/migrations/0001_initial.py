# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Thread'
        db.create_table('api_thread', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('platform', self.gf('django.db.models.fields.IntegerField')(default=0)),
            ('summary', self.gf('django.db.models.fields.TextField')(blank=True)),
            ('created_timestamp', self.gf('django.db.models.fields.DateTimeField')(auto_now_add=True, blank=True)),
            ('udpated_timestamp', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
        ))
        db.send_create_signal('api', ['Thread'])


    def backwards(self, orm):
        # Deleting model 'Thread'
        db.delete_table('api_thread')


    models = {
        'api.thread': {
            'Meta': {'object_name': 'Thread'},
            'created_timestamp': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'platform': ('django.db.models.fields.IntegerField', [], {'default': '0'}),
            'summary': ('django.db.models.fields.TextField', [], {'blank': 'True'}),
            'udpated_timestamp': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'})
        }
    }

    complete_apps = ['api']