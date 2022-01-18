from django.urls import path
from base.views import *

urlpatterns = [
    path('users', user_list, name='user.list'),
    path('users/login', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register', user_register, 'user.register'),
    path('users/profile', user_profile, name='user.profile'),
  
    path('products', product_list, name='product.list'),
    path('products/<str:pk>', product_detail, name='product.detail')
]