from django.apps import AppConfig


class ChargestationConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'chargeStation'

    def ready(self):
        import chargeStation.signals
