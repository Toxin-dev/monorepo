from rest_framework import serializers


class ClientRetrive(serializers.Serializer):
    email = serializers.EmailField()
    profile_picture = serializers.URLField()
