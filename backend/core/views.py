import json
from rest_framework import views
from rest_framework.response import Response

class VersionAPIView(views.APIView):
    def get(self, request):
        """
        Read File of version
        """

        f = open('media/data.txt', 'r')
        data = json.load(f)
        f.close()
        return Response(data)