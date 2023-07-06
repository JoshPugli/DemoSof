from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from .models import Person

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
