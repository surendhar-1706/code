from django.db.models.signals import pre_save


def default_subject(sender, instance, using):
    if not instance.subject_init:
        instance.subject_init = instance.subject_initials()


pre_save.connect(default_subject, sender=Subject)
