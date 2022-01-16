from django.db import models

# Create your models here.
class Product(models.Model):
    choices =[
        ('electronic','electronic'),
        ('men clothes','men clothes'),
        ('women clothes','women clothes'),
        ('non consumable','non consumable')
    ]
    product_choices =[
    ('indoor','indoors'),
    ('outdoors','outdoors')
    ]
    name = models.CharField(max_length=255)
    category = models.CharField(choices=choices,default='non consumable',max_length=255)
    product_type = models.CharField(choices=product_choices,max_length=255)
    price = models.CharField(max_length=255)
    discounted_price = models.CharField(max_length=255)
    product_specification = models.CharField(max_length=255)
    product_image = models.ImageField(upload_to = 'product_images/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name