from json import JSONDecodeError
from django.core import serializers
from django.http import HttpResponse, JsonResponse

from utils.date_converter import Date
from .serializers import ChargeSessionSerializer,ChargePointConnectorSerializer
from .models import ChargeSession
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.mixins import ListModelMixin,UpdateModelMixin,RetrieveModelMixin


class ChargeSessionViewSet(
        ListModelMixin,
        RetrieveModelMixin,
        UpdateModelMixin,
        viewsets.GenericViewSet
        ):
    """
    A simple ViewSet for listing or retrieving items.
    """
    permission_classes = (IsAuthenticated,)
    queryset = ChargeSession.objects.all()
    serializer_class = ChargeSessionSerializer

    def list(self, request):
        dateStart = str(request.GET.get('dateStarted'))
        dateEnd = str(request.GET.get('dateEnd'))
        if dateStart and dateEnd is not None:
            dateStartobject = Date.date_converter(str(dateStart))
            dateEndobject = Date.date_converter(str(dateEnd))
            qs_json = serializers.serialize('json', ChargeSession.objects.filter(startDate__range = (dateStartobject,dateEndobject)))
            return HttpResponse(qs_json, content_type='application/json')
        else:
            qs_json = serializers.serialize('json', ChargeSession.objects.all())
            return HttpResponse(qs_json, content_type='application/json')
            
    def create(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = ChargeSessionSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return JsonResponse({"result": "error","message": "Json decoding error"}, status= 400)

    def patch(self, request, *args, **kwargs):
        try:
            chargeSession = self.get_object()
            data = JSONParser().parse(request)
            serializer = ChargeSessionSerializer(chargeSession, data=data, partial=True)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return JsonResponse({"result": "error","message": "Json decoding error"}, status= 400)



class ConnectorViewSet(
        ListModelMixin,
        RetrieveModelMixin,
        UpdateModelMixin, 
        viewsets.GenericViewSet
        ):
    """
    A simple ViewSet for listing, retrieving and creating orders.
    """
    permission_classes = (IsAuthenticated,)
    serializer_class = ChargePointConnectorSerializer

    def create(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = ChargePointConnectorSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return JsonResponse({"result": "error","message": "Json decoding error"}, status= 400)