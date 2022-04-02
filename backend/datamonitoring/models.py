from django.db import models

class Sensor(models.Model):
    serial_number = models.CharField('Serial Number', max_length=6)
    network_number = models.CharField('Network Number', max_length=2)

    def __str__(self):
        return self.serial_number

    class Meta:
        verbose_name = "Сенсор"
        verbose_name_plural = "Сенсоры"


class Record(models.Model):
    date_time = models.DateTimeField(name='Date and Time')
    temperature = models.FloatField(name='Temperature')
    relative_humidity = models.FloatField(name='Relative Humidity')
    sensor = models.ForeignKey(Sensor, name='Sensor', on_delete=models.CASCADE)

    def __str__(self):
        return self.Sensor.serial_number + ' ' + self.__getattribute__('Date and Time').strftime("%m/%d/%Y, %H:%M:%S")

    class Meta:
        ordering = ["Date and Time"]
        verbose_name = "Запись"
        verbose_name_plural = "Записи"



