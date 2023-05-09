from django.contrib import admin
from .models import RFID, ChargePoint, ChargePointConnector, Customer


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

@admin.register(ChargePoint)
class ChargePointAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'connectorNumber')

@admin.register(ChargePointConnector)
class ChargePointAdmin(admin.ModelAdmin):
    list_display = ('id', 'connectorNumber')

@admin.register(RFID)
class ChargePointAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'number')