from django.contrib import admin

from .models import Product, Tag

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ["name", "tag"]
    list_editable = ["tag"]


admin.site.register(Product, ProductAdmin)
admin.site.register(Tag)
