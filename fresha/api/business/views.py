from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializer import OwnerSerializer
from .models import Owner

# Create your views here.
class OwnerRetriveAPIView(APIView):
    def post(self, request):
        try:
            queryset = Owner.objects.get(email=request.data.get("email"))
        except Owner.DoesNotExist:
            return Response(
                {"error": "user does not exist"}, status=status.HTTP_404_NOT_FOUND
            )
        serializer = OwnerSerializer(queryset)
        return Response(serializer.data)
