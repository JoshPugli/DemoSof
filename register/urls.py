from django.urls import path
from .views import create_person
from .views import send_email_view

urlpatterns = [
    path('create-person/', create_person, name='create_person'),
    path('send-email/', send_email_view, name='send-email'),
]
