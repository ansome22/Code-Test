# Generated by Django 4.2.1 on 2023-05-11 23:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chargeStation', '0002_remove_chargepoint_connector_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chargesession',
            name='errorMessage',
            field=models.TextField(blank=True, null=True, verbose_name='errorMessage'),
        ),
    ]
