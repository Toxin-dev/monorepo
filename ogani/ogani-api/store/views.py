from .serializers import ProductSerializer, TagSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Product, Tag


# Create your views here.
@api_view(["GET", "POST"])
def product_list_view(request):
    if request.method == "GET":
        serializer = ProductSerializer(Product.objects.all(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    if request.method == "POST":
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET", "PATCH", "DELETE"])
def product_update(request, id):
    if request.method == "GET":
        serializer = ProductSerializer(Product.objects.get(id=id))
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "PATCH":
        serializer = ProductSerializer(
            Product.objects.get(id=id), data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "DELETE":
        product = Product.objects.get(id == id)
        product.delete()
        return Response("ok")


@api_view(["GET", "POST"])
def tag_list_view(request):
    if request.method == "GET":
        serializer = TagSerializer(Tag.objects.all(), many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = TagSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["DELETE"])
def tag_destory_view(request, id):
    Tag.objects.get(id=id).delete()
    return Response(
        {'msg': f"data with this {id} deleted."}, status=status.HTTP_204_NO_CONTENT
    )
