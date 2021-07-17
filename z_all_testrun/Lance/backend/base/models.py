from django.db import models

# Create your models here.


class Skill(models.Model):
    name = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name


class Post(models.Model):
    CATEGORY = (
        ('Backend', 'Backend'),
        ('Frontend', 'Frontend'),
        ('Web design', 'Web design')
    )
    WEEKLY_LENGTH = (
        ('Less than 30 hours', 'Less than 30 hours'),
        ('More than 30 hours', 'Less than 30 hours')
    )
    Expected_length = (
        ('Less than a month', 'Less than a month'),
        ('More than a month', 'More than a month'),
        ('Six months', 'Six months')
    )

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    category = models.CharField(choices=CATEGORY, null=True, max_length=255)
    weekly_length = models.CharField(
        choices=WEEKLY_LENGTH, null=True, max_length=255)
    total_length = models.CharField(
        choices=Expected_length, blank=True, max_length=255)
    date_createad = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
