from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.hashers import make_password


class CustomUserManager(BaseUserManager):
    def _create_user(
        self, password, phone, email, first_name="", last_name="", **extra_field
    ):
        user = self.model(
            phone=phone,
            email=email,
            first_name=first_name,
            last_name=last_name,
            **extra_field,
        )
        user.password = make_password(password=password)
        user.save()
        return user

    def create_user(self, password, email, phone, **extra_field):
        extra_field.setdefault("is_staff", True)
        user = self._create_user(
            password=password, email=email, phone=phone, **extra_field
        )
        return user

    def create_superuser(self, password, email, phone, **extra_field):
        extra_field.setdefault("is_staff", True)
        extra_field.setdefault("is_superuser", True)
        user = self._create_user(
            password=password, email=email, phone=phone, **extra_field
        )
        return user
