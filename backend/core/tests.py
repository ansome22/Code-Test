from django.test import TestCase
from rest_framework.test import APITestCase

from utils.date_converter import Date

# Create your tests here.

class ContactTestCase(APITestCase):
    """
    Test suite for Date
    """
    def test_date(self):
        '''
        test dates
        '''
        response = Date.date_converter('2020/03/01')
        self.assertEqual(response.year, 2020)
        self.assertEqual(response.month, 3)
        self.assertEqual(response.day, 1)

    def test_dateTime(self):
        '''
        test date times
        '''
        response = Date.date_converter('2020-03-05 13:10')
        self.assertEqual(response.year, 2020)
        self.assertEqual(response.month, 3)
        self.assertEqual(response.day, 5)
        self.assertEqual(response.hour, 13)
        self.assertEqual(response.minute, 10)