# Generated by Django 5.0.6 on 2024-06-23 17:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('student_management_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feesstructure',
            name='lab_fee',
        ),
        migrations.RemoveField(
            model_name='feesstructure',
            name='library_fee',
        ),
        migrations.RemoveField(
            model_name='feesstructure',
            name='other_fee',
        ),
    ]