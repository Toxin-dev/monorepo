from .models import Product, Tag
from rest_framework import serializers
from rest_framework.generics import UpdateAPIView


class TagSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=255)

    def create(self, validated_data):
        tag = Tag(**validated_data)
        tag.save()
        return tag


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=40)
    price = serializers.DecimalField(max_digits=7, decimal_places=2)
    desc = serializers.CharField(max_length=255, source="description")
    tag = serializers.StringRelatedField()
    created_on = serializers.DateField(read_only=True)
    updated_on = serializers.DateField(read_only=True)

    def create(self, validated_data):
        product = Product(**validated_data)
        product.save()
        return Product

    def update(self, instance: Product, validated_data):
        instance.name = validated_data.get("name")
        instance.price = validated_data.get("price")
        instance.description = validated_data.get("description")
        print(validated_data)
        instance.save()
        return instance
