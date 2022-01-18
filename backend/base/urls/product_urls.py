from django.urls import path
from base.views import *

urlpatterns = [
    path('', product_list, name='product.list'),
    path('<str:pk>', product_detail, name='product.detail')
]