
import uuid
from django.db import models
from utils.model_abstracts import Model

class Customer(
	Model
	):

	class Meta:
		verbose_name_plural = "Customers"

	name = models.CharField(verbose_name="Name", max_length=255)

	def __str__(self):
		return f'{self.name}'
	



class ChargePoint(
	Model
	):

	class Meta:
		verbose_name_plural = "ChargePoints"

	name = models.CharField(verbose_name="Name", max_length=255)
	connectorNumber = models.IntegerField(default=1)

	def __str__(self):
		return f'{self.name}'
	

class ChargePointConnector(
	Model
	):

	class Meta:
		verbose_name_plural = "ChargePointConnectors"

	connectorNumber = models.IntegerField(default=1)

	def __str__(self):
		return f'{self.connectorNumber}'
	

class RFID(
	Model
	):

	class Meta:
		verbose_name_plural = "RFIDs"

	name = models.CharField(verbose_name="Name", max_length=255)
	number = models.UUIDField(default=uuid.uuid4)

	def __str__(self):
		return f'{self.connectorNumber}'