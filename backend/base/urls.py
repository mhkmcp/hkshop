from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('users/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('products', product_list, name='product.list'),
    path('products/<str:pk>', product_detail, name='product.detail')

]