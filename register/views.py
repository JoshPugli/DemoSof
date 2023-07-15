from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
import json
from django.http import JsonResponse
from .models import Person
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse
import os

def index(request):
    return render(request, 'index.html')

@csrf_exempt
def create_person(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            first_name = data.get('firstName')
            last_name = data.get('lastName')
            email = data.get('email')
            
            person = Person(first_name=first_name, last_name=last_name, email=email)
            person.save()
            
            return JsonResponse({'message': 'Person created successfully.'})
        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON data.'}, status=400)
    else:
        return JsonResponse({'message': 'Invalid request.'}, status=400)

@csrf_exempt
def send_email_view(request):
    if request.method == 'POST':
        # Send email to instructor
        subject = f"{request.POST.get('first_name')} {request.POST.get('last_name')} Signup for The Evolution of Systemic Racism"
        message = f"{request.POST.get('first_name')} {request.POST.get('last_name')} has requested to join the course. \n\n MESSAGE: {request.POST.get('message')} \n\n EMAIL: {request.POST.get('email')}"
        from_email = settings.EMAIL_HOST_USER   
        recipient = os.environ.get('RECIPIENT_EMAIL')
        recipient_list = [recipient, os.environ.get('EMAIL_HOST_USER')]  
        send_mail(subject, message, from_email, recipient_list, fail_silently=False)
        
        # Send confirmation email to user
        subject = f"Evolution of Systemic Racism <br />Signup Confirmation"
        message = f"Dear {request.POST.get('first_name')}, \n\nThank you for signing up for the course. Your information has been sent to the instructors."
        from_email = settings.EMAIL_HOST_USER  
        recipient_list = [request.POST.get('email')]
        send_mail(subject, message, from_email, recipient_list, fail_silently=False)
        
        # Confirmation message
        return HttpResponse('Email sent successfully!')
    else:
        return HttpResponse('Invalid request method.')

