from django.urls import path
from .views import product_update, product_list_view, tag_destory_view, tag_list_view

urlpatterns = [
    path("product/", product_list_view),
    path("product/<id>", product_update),
    path("tag/", tag_list_view),
    path("tag/<id>", tag_destory_view),
]
