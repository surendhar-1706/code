# Generated by Django 4.1 on 2022-08-05 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_rename_team_id_teammember_team'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='assignedrole',
            name='members',
        ),
        migrations.RemoveField(
            model_name='assignedrole',
            name='roles',
        ),
        migrations.AddField(
            model_name='assignedrole',
            name='member_primary',
            field=models.ManyToManyField(blank=True, related_name='member_primary', to='base.profile'),
        ),
        migrations.AddField(
            model_name='assignedrole',
            name='member_secondary',
            field=models.ManyToManyField(blank=True, related_name='member_secondary', to='base.profile'),
        ),
        migrations.AddField(
            model_name='assignedrole',
            name='member_teritary',
            field=models.ManyToManyField(blank=True, related_name='member_teritary', to='base.profile'),
        ),
        migrations.AddField(
            model_name='assignedrole',
            name='team_lead_primary',
            field=models.ManyToManyField(blank=True, related_name='team_leader_primary', to='base.profile'),
        ),
        migrations.AddField(
            model_name='assignedrole',
            name='team_lead_secondary',
            field=models.ManyToManyField(blank=True, related_name='team_leader_secondary', to='base.profile'),
        ),
        migrations.AddField(
            model_name='assignedrole',
            name='team_manager',
            field=models.ManyToManyField(blank=True, related_name='team_manager', to='base.profile'),
        ),
    ]
