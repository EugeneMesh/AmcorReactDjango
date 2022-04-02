# Generated by Django 4.0.1 on 2022-01-17 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sensor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('serial_number', models.CharField(max_length=6, verbose_name='Serial Number')),
                ('network_number', models.CharField(max_length=2, verbose_name='Network Number')),
            ],
        ),
    ]
