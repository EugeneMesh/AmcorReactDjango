# Generated by Django 4.0.1 on 2022-01-18 14:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('datamonitoring', '0002_datamonitoring'),
    ]

    operations = [
        migrations.CreateModel(
            name='Record',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Date and Time', models.DateTimeField()),
                ('Temperature', models.FloatField()),
                ('Relative Humidity', models.FloatField()),
                ('Sensor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='datamonitoring.sensor')),
            ],
        ),
    ]
