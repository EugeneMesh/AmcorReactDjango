from django.db import migrations

def create_data(apps, schema_editor):
    Sensor = apps.get_model('datamonitoring', 'Sensor')
    Sensor(serial_number="003291", network_number="01").save()


class Migration(migrations.Migration):

    dependencies = [
        ('datamonitoring', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data)
    ]
