from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class signupForm(UserCreationForm):
    email = forms.EmailField()
    first_name = forms.CharField(max_length=35)
    last_name = forms.CharField(max_length=35)

    class Meta:
        model = User
        fields = ['username', 'email', 'password1',
                  'password2', 'first_name', 'last_name']


class customizeForm(forms.Form):
    name = forms.CharField(label='Votre nom', max_length=50),
    email = forms.EmailField(label='Votre e-mail')
    message = forms.CharField(widget=forms.Textarea, label='Votre message')
