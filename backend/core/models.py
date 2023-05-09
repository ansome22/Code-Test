
from django.db import models
from utils.model_abstracts import Model

class Customer(
	Model
	):

	class Meta:
		verbose_name_plural = "Customers"

	name = models.CharField(verbose_name="Name", max_length=255)

	def __str__(self):
		return f'{self.title}'