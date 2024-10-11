from django.apps import AppConfig


class ApiConfig(AppConfig):
    """Configuration for the API application.

    This class sets the default auto field type and the name of the application.
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'