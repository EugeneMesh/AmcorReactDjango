from rest_framework import serializers
from .models import Sensor
from .models import Record


class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = ('serial_number', 'network_number')


class RecordSerializer(serializers.ModelSerializer):
    serial_number = serializers.CharField(read_only=True, source="Sensor.serial_number")

    class Meta:
        model = Record
        fields = ('Date and Time', 'Temperature', 'Relative Humidity', 'serial_number')
