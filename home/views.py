from django.shortcuts import render
from .models import Image

# Create your views here.
def index(request):
    images = Image.objects.all()
    return render(request, 'home/index.html' , {'images': images})