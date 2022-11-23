from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from account.models import User
from .serializers import ClientRetrive
import sys

# Create your views here.
class ClientRetriveView(APIView):
    def post(self, request):
        try:
            client_data = User.objects.get(email=request.data["email"])
            serializer = ClientRetrive(client_data)
            return Response(serializer.data)
        except User.DoesNotExist as e:
            return Response(
                {"error": "Client does not exist"}, status=HTTP_400_BAD_REQUEST
            )
