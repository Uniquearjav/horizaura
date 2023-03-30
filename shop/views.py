from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def index(request):
    return render(request, 'shop/index.html')

def about(request):
    return render(request, 'blog/about.html')

def contact(request):
    return render(request, 'blog/contact.html')

def tracker(request):
    return render(request, 'blog/tracker.html')

def search(request):
    return render(request, 'blog/search.html')

def productView(request):
    return render(request, 'blog/productView.html')

def checkout(request):
    return render(request, 'blog/checkout.html')

def login(request):
    return render(request, 'blog/login.html')

def register(request):
    return render(request, 'blog/register.html')

def logout(request):
    return render(request, 'blog/logout.html')

def cart(request):
    return render(request, 'blog/cart.html')