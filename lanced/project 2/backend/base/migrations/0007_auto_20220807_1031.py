# Generated by Django 3.2 on 2022-08-07 05:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_auto_20220807_1028'),
    ]

    operations = [
        migrations.RenameField(
            model_name='quote',
            old_name='line_1',
            new_name='address_line_1',
        ),
        migrations.RenameField(
            model_name='quote',
            old_name='line_2',
            new_name='address_line_2',
        ),
    ]
