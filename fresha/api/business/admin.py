from django.contrib import admin
from .models import Owner, Salon, Staff, Service

# Register your models here.
admin.site.register(Owner)
admin.site.register(Salon)
admin.site.register(Staff)
admin.site.register(Service)
