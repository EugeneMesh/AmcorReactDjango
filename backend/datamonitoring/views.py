from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Sensor
from .models import Record
from .serializers import SensorSerializer
from .serializers import RecordSerializer


@api_view(['GET', 'POST'])
def records_list(request):
    if request.method == 'GET':
        serial_numbers = request.query_params.get('serial_numbers')
        if serial_numbers:
            serial_numbers = serial_numbers.split(",")

        data = Record.objects.filter(Sensor__serial_number__in=serial_numbers).order_by('Sensor', 'Date and Time')

        serializer = RecordSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RecordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def sensors_list(request):
    if request.method == 'GET':

        data = Sensor.objects.all()

        serializer = SensorSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SensorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
