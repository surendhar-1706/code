# Generated by Django 4.1 on 2022-08-04 19:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_remove_team_other_team_members_team_team_members_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='team_member',
            new_name='team',
        ),
        migrations.RemoveField(
            model_name='team',
            name='member_primary',
        ),
        migrations.RemoveField(
            model_name='team',
            name='member_secondary',
        ),
        migrations.RemoveField(
            model_name='team',
            name='member_teritary',
        ),
        migrations.RemoveField(
            model_name='team',
            name='team_lead_primary',
        ),
        migrations.RemoveField(
            model_name='team',
            name='team_lead_secondary',
        ),
        migrations.RemoveField(
            model_name='team',
            name='team_manager',
        ),
    ]
