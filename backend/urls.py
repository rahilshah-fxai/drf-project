from django.contrib import admin
from django.urls import path

"""
Database URL configuration for the Django project.
"""

urlpatterns = [
    path('admin/', admin.site.urls),
]