from django.shortcuts import render, redirect
from .forms import signupForm
from django.contrib.auth import login
from django.contrib import messages
from django.http import HttpResponse
from django.template import loader

# Create your views here.


def signup(request):
    if request.method == 'POST':
        form = signupForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('index')
    else:
        form = signupForm()
    return render(request, 'signup.html', {'form': form})


def index(request):
    if request.method == 'GET':
        template = loader.get_template('index.html')
        return HttpResponse(template.render())


def nouveautes(request):
    if request.method == 'GET':
        template = loader.get_template('nouveautés.html')
        return HttpResponse(template.render())


def customize(request):
    if request.method == 'GET':
        template = loader.get_template('customize.html')
        return HttpResponse(template.render())


def manga(request):
    if request.method == 'GET':
        template = loader.get_template('manga.html')
        return HttpResponse(template.render())


def kid(request):
    if request.method == 'GET':
        template = loader.get_template('kid.html')
        return HttpResponse(template.render())


def luxe(request):
    if request.method == 'GET':
        template = loader.get_template('luxe.html')
        return HttpResponse(template.render())


def clothes(request):
    if request.method == 'GET':
        template = loader.get_template('clothes.html')
        return HttpResponse(template.render())


def accessories(request):
    if request.method == 'GET':
        template = loader.get_template('accessories.html')
        return HttpResponse(template.render())


def aboutme(request):
    if request.method == 'GET':
        template = loader.get_template('aboutme.html')
        return HttpResponse(template.render())
