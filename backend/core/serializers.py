from . import models
from rest_framework import serializers
from rest_framework.fields import CharField, IntegerField,UUIDField



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
		model = models.ChargePointConnector
		fields = (
			'number',
		)