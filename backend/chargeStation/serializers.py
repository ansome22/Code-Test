from .models import RFID, ChargePoint, ChargePointConnector, ChargeSession, Customer, Vehicle
from rest_framework import serializers
from rest_framework.fields import CharField, IntegerField,UUIDField, DateTimeField
from rest_framework import status
from rest_framework.exceptions import APIException


class ConnectiorInUse(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = 'Connector In Use'
    default_code = 'invalid'

class ChargeSessionAlreadyEnded(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = 'Charge Session Already Ended'
    default_code = 'invalid'
    
class ChargeSessionUserPerssion(APIException):
    status_code = status.HTTP_401_UNAUTHORIZED
    default_detail = 'You are not the user who can end this session'
    default_code = 'invalid'

class CustomerSerializer(serializers.ModelSerializer):

	name = CharField(required=True)
	
	class Meta:
		model = Customer
		fields = (
			'name',
		)


class ChargePointSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = ChargePoint
		fields = (
			'name',
			'connectorNumber',
		)

class ChargePointConnectorSerializer(serializers.ModelSerializer):

	connectorNumber = IntegerField(required=True)
	vehicle = serializers.PrimaryKeyRelatedField(queryset = Vehicle.objects.all(), many=False)
	chargePoint = serializers.PrimaryKeyRelatedField(queryset = ChargePoint.objects.all(), many=False)
	
	class Meta:
		model = ChargePointConnector
		fields = (
			'connectorNumber',
			'vehicle',
			'chargePoint'
		)


class RFIDSerializer(serializers.ModelSerializer):

	name = CharField(required=True)
	number = UUIDField(required=True)
	
	class Meta:
		model = RFID
		fields = (
			'number',
		)


class VehicleSerializer(serializers.ModelSerializer):

	name = CharField(required=True)
	registrationPlate = CharField(required=True)
	
	class Meta:
		model = Vehicle
		fields = (
			'name',
			'registrationPlate',
		)



class ChargeSessionSerializer(serializers.ModelSerializer):

	vehicle = serializers.PrimaryKeyRelatedField(queryset = Vehicle.objects.all(), many=False)
	startDate = DateTimeField(required=True)
	endMeter = IntegerField(required=False)
	errorMessage = CharField(required=False)
	
	class Meta:
		model = ChargeSession
		fields = (
			'vehicle',
			'startDate',
			'endMeter',
			'errorMessage',
		)