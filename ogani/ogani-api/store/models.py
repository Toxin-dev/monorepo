from enum import unique
from django.db import models

# Create your models here.
class Tag(models.Model):
    title = models.CharField(max_length=32, unique=True)

    def __str__(self) -> str:
        return self.title


class Product(models.Model):
    name = models.CharField(max_length=255, unique=True)
    picture = models.ImageField(upload_to="./products", blank=True)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    tag = models.ForeignKey(Tag, on_delete=models.SET_NULL, null=True)
    created_on = models.DateField(auto_now_add=True)
    updated_on = models.DateField(auto_now=True)

    def __str__(self) -> str:
        return self.name

    pass
