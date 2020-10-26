from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                                related_name='admin')
    name = models.CharField(max_length=100)
    quantity = models.FloatField()
    price = models.FloatField()
    unit = models.CharField(max_length=100, default="")
    product_type = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)

    class Meta(object):
        verbose_name_plural = 'Productos'

    def __str__(self):
        return self.name


class Order(models.Model):
    phone = models.CharField(max_length=100)
    payment = models.CharField(max_length=100, default="")
    name = models.CharField(max_length=100, default="")
    email = models.CharField(max_length=100, default="")
    adress = models.CharField(max_length=100)
    message = models.CharField(max_length=200, default="")
    order = models.CharField(max_length=100, default="")
    total = models.CharField(max_length=100, default="")
    is_active = models.BooleanField(default=True)

    class Meta(object):
        verbose_name_plural = 'Ordenes'

    def __str__(self):
        return self.name




