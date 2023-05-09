from . import models
from rest_framework import serializers
from rest_framework.fields import CharField, IntegerField,UUIDField, DateTimeField



class CustomerSerializer(serializers.ModelSerializer):

	name = CharField(required=True)
	
	class Meta:
		model = models.Customer
		fields = (
			'name',
		)


class ChargePointSerializer(serializers.ModelSerializer):

	name = CharField(required=True)
	connectorNumber = IntegerField(required=True)
	
	class Meta:
		model = models.ChargePoint
		fields = (
			'name',
			'connectorNumber',
		)

class ChargePointConnectorSerializer(serializers.ModelSerializer):

	connectorNumber = IntegerField(required=True)
	
	class Meta:
		model = models.ChargePointConnector
		fields = (
			'connectorNumber',
		)


class RFIDSerializer(serializers.ModelSerializer):

	name = CharField(required=True)
	number = UUIDField(required=True)
	
	class Meta:
		model = models.RFID
		fields = (
			'number',
		)


class VehicleSerializer(serializers.ModelSerializer):

	name = CharField(required=True)
	registrationPlate = CharField(required=True)
	
	class Meta:
		model = models.Vehicle
		fields = (
			'name',
			'registrationPlate',
		)



class ChargeSessionSerializer(serializers.ModelSerializer):

	vehicle = UUIDField(required=True)
	startDate = DateTimeField(required=True)
	endDate = DateTimeField(required=True)
	errorMessage = CharField(required=True)
	
	class Meta:
		model = models.ChargeSession
		fields = (
			'vehicle',
			'startDate',
			'endDate',
			'errorMessage',
		)