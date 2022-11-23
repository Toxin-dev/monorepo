from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from core.serializers import UserSerializer

# Create your views here.


class UserView(APIView):
    def get(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.validated_data)
