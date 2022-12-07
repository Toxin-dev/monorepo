from django.db import models

# Create your models here.
class Owner(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(unique=True)
    postal_code = models.IntegerField()
    phone_number = models.CharField(max_length=10, unique=True)


class Salon(models.Model):
    name = models.CharField(max_length=120)
    staff_manager = models.OneToOneField(
        "Staff", on_delete=models.SET_NULL, null=True, blank=True
    )
    business = models.ForeignKey(Owner, on_delete=models.CASCADE)


class Service(models.Model):
    name = models.CharField(max_length=120)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    gender = models.CharField(max_length=1, choices=[("m", "male"), ("f", "female")])


class Staff(models.Model):
    name = models.CharField(max_length=80)
    works_at = models.ForeignKey(Salon, on_delete=models.CASCADE, null=True, blank=True)
    service = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True)
