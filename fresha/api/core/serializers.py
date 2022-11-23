from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer
from rest_framework import serializers
from account.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "password", "is_client", "is_staff"]

    def create(self, validated_data):
        user = User.objects.create_client(**validated_data)
        return user

    pass
