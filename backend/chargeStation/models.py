
import uuid
from collections import OrderedDict
from django.db import models
from django.contrib.auth.models import User
from utils.model_abstracts import Model

class Vehicle(
	Model
	):

	class Meta:
		verbose_name_plural = "Vehicles"

	name = models.CharField(verbose_name="Name", max_length=255)
	registrationPlate = models.CharField(verbose_name="RegistrationPlate", max_length=255)

	def __str__(self):
		return f'{self.name}'

class RFID(
	Model
	):

	class Meta:
		verbose_name_plural = "RFIDs"

	name = models.CharField(verbose_name="Name", max_length=255)
	number = models.UUIDField(default=uuid.uuid4)

	def __str__(self):
		return f'{self.name}'

class Customer(
	Model
	):

	class Meta:
		verbose_name_plural = "Customers"

	name = models.CharField(verbose_name="Name", max_length=255)
	RFID = models.ForeignKey(RFID,on_delete=models.CASCADE, null=True, blank=True)
	user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True, blank=True)
	vehicle = models.ForeignKey(Vehicle,on_delete=models.SET_NULL, null=True, blank=True)

	def __str__(self):
		return f'{self.name}'

class ChargePoint(
	Model
	):

	class Meta:
		verbose_name_plural = "ChargePoints"

	name = models.CharField(verbose_name="Name", max_length=255)

	def __str__(self):
		return f'{self.name}'
	

class ChargePointConnector(
	Model
	):

	class Meta:
		verbose_name_plural = "ChargePointConnectors"

	connectorNumber = models.IntegerField(default=1)
	vehicle = models.ForeignKey(Vehicle,on_delete=models.SET_NULL, null=True, blank=True)
	chargePoint = models.ForeignKey(ChargePoint,on_delete=models.CASCADE, null=True, blank=True)

	def create_ChargePointConnector(self, connectorNumber, vehicle, chargePoint):
		#used to place an order
		order = ChargePointConnector.objects.create(
			connectorNumber = connectorNumber, 
			vehicle = vehicle, 
			chargePoint= chargePoint)
		return order

	def __str__(self):
		return f'{self.connectorNumber}'

class ChargeSession(
	Model
	):

	class Meta:
		verbose_name_plural = "ChargeSessions"

	vehicle = models.ForeignKey(Vehicle,on_delete=models.DO_NOTHING, null=False, blank=False)
	startDate = models.DateTimeField(verbose_name="startDate")
	endMeter = models.IntegerField(verbose_name="endMeter")
	errorMessage = models.TextField(verbose_name="errorMessage", null=True, blank=True)

	def __str__(self):
		return f'{self.vehicle}'