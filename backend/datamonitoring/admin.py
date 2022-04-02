from django.contrib import admin
from .models import Sensor, Record


class RecordAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'Temperature', 'Relative Humidity']


admin.site.register(Sensor)
admin.site.register(Record, RecordAdmin)
