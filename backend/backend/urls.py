from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('base.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# configure the image url to achieve image in backend url 
# e.g, localhost:8000/images/murad.png 
