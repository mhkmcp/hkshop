from django.urls import path
from base.views import *

urlpatterns = [
    path('', user_list, name='user.list'),
    path('login', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register', user_register, 'user.register'),
    path('profile', user_profile, name='user.profile'),
  
]