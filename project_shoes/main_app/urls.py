from django.urls import path
from . import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('base/', views.base, name='base'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.user_login, name='login'),
    path('nouveautés/', views.nouveautes, name='new'),
    path('customize/', views.customize, name='customize'),
    path('aboutme/', views.aboutme, name='aboutme')
]
