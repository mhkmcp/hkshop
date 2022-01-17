from django.urls import path
from base.views import *

urlpatterns = [
    path('products', product_list, name='product.list'),
    path('products/<str:pk>', product_detail, name='product.detail')
]