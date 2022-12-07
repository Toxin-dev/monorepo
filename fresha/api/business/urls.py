from django.urls import path
from .views import OwnerRetriveAPIView

urlpatterns = [path("users/", OwnerRetriveAPIView.as_view())]
