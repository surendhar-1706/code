# Generated by Django 4.1 on 2022-08-05 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_meetings_meetingsassigned'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meetingsassigned',
            name='meeting_assigned',
        ),
        migrations.AddField(
            model_name='meetingsassigned',
            name='date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='meetingsassigned',
            name='date_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='meetingsassigned',
            name='time',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.DeleteModel(
            name='Meetings',
        ),
    ]
