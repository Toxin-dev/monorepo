from django.urls import path
from .views import ClientRetriveView

urlpatterns = [path('', ClientRetriveView.as_view())]