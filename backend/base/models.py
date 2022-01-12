from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields.related import ForeignKey, OneToOneField 


class Product(models.Model):
    user = ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    # image = 
    brand =  models.CharField(max_length=255, null=True, blank=True)
    category =  models.CharField(max_length=255, null=True, blank=True)
    description =  models.TextField()
    rating =  models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    num_reviews = models.IntegerField(default=0, null=True, blank=True)
    price =  models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    count_in_stock =  models.IntegerField(default=0, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now =True)
    _id = models.AutoField(primary_key=True, editable=False)


    def __str__(self) -> str:
        return self.name
