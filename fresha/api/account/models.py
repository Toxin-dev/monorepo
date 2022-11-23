from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    UserManager as BaseUserManager,
)
from django.conf import settings

# Create your models here.


class UserManager(BaseUserManager):
    def create_user(
        self,
        email,
        password,
        profile_picture=None,
        is_superuser=False,
        is_staff=False,
        is_client=False,
        is_active=True,
    ):
        if not email:
            raise ValueError("email id should not be empty")
        user = self.model(email=email)
        user.set_password(password)
        user.profile_picture = profile_picture
        user.is_superuser = is_superuser
        user.is_client = is_client
        user.is_staff = is_staff
        user.is_active = is_active
        user.save()
        return user

    def create_staff(self, email, password):
        user = self.create_user(email=email, password=password, is_staff=True)
        return user

    def create_client(self, email, password):
        user = self.create_user(email=email, password=password, is_client=True)
        return user

    def create_superuser(self, email, password):
        user = self.create_user(
            email=email, password=password, is_staff=True, is_superuser=True
        )
        return user

    pass


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    profile_picture = models.URLField(blank=True, null=True)
    created_at = models.DateField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_client = models.BooleanField(default=False)
    USERNAME_FIELD = settings.USERNAME_FIELD
    REQUIRED_FIELDS = []
    objects = UserManager()
