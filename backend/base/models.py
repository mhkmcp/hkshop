from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields.related import ForeignKey, OneToOneField 


class Product(models.Model):
    user            = ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name            = models.CharField(max_length=255, null=True, blank=True)
    # image = 
    brand           = models.CharField(max_length=255, null=True, blank=True)
    category        = models.CharField(max_length=255, null=True, blank=True)
    description     = models.TextField()
    rating          = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    num_reviews     = models.IntegerField(default=0, null=True, blank=True)
    price           = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    count_in_stock  = models.IntegerField(default=0, null=True, blank=True)
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now =True)
    _id             = models.AutoField(primary_key=True, editable=False)


    def __str__(self) -> str:
        return self.name


class Review(models.Model):
    product         = ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user            = ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name            = models.CharField(max_length=255, null=True, blank=True)
    rating          = models.IntegerField(default=0, null=True, blank=True)
    comment         = models.TextField()
  
    def __str__(self) -> str:
        return self.name + ' ' + str(self.rating)


class Order(models.Model):
    user            = ForeignKey(User, on_delete=models.SET_NULL, null=True)
    payment_method  = models.CharField(max_length=255, null=True, blank=True)
    tax_price       = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    shipping_price  = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    total_price     = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    is_paid         = models.BooleanField(default=False)
    paid_at         = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    is_delivered    = models.BooleanField(default=False)
    delivered_at    = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now =True)

    def __str__(self) -> str:
        return str(self.created_at) 


class OrderItem(models.Model):
    product         = ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order           = ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name            = models.CharField(max_length=255, null=True, blank=True)
    quantity        = models.IntegerField(default=0, null=True, blank=True)
    price           = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    image           = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self) -> str:
        return self.name
 

class ShippingAddress(models.Model):
    order           = models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank=True)
    address         = models.CharField(max_length=255, null=True, blank=True)
    city            = models.CharField(max_length=63, null=True, blank=True)
    postal_code     = models.CharField(max_length=15, null=True, blank=True)
    country         = models.CharField(max_length=63, null=True, blank=True)
    shipping_price  = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True) 

    def __str__(self) -> str:
        return self.address