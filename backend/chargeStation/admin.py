from django.contrib import admin
from .models import RFID, ChargePoint, ChargePointConnector, ChargeSession, Customer, Vehicle


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(ChargePoint)
class ChargePointAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(ChargePointConnector)
class ChargePointAdmin(admin.ModelAdmin):
    list_display = ('id', 'connectorNumber','vehicle','chargePoint')

@admin.register(RFID)
class ChargePointAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'number')

@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ('name','registrationPlate')

@admin.register(ChargeSession)
class ChargePointAdmin(admin.ModelAdmin):
    list_display = ('vehicle','startDate','endMeter')