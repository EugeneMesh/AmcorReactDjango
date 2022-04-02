from django.urls import path
from . import views

urlpatterns = [
    path('api/sensors/', views.sensors_list),
    path('api/records/', views.records_list)
]