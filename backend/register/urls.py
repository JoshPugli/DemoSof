from django.urls import path, include
from .views import create_person
from .views import send_email_view
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('create-person/', create_person, name='create_person'),
    path('send-email/', send_email_view, name='send-email'),
]
