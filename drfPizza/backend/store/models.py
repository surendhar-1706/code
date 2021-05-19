from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
# Create your models here.

class Category(models.Model):
    name = models.CharField(verbose_name=_("Category name"),max_length=255,unique=True)
    slug =models.SlugField(verbose_name=_('Url'),max_length=255,unique=True)
    is_active = models.BooleanField(default=True)

    def get_absolute_url(self):
        return reverse("store:category list",args=[self.slug])

    def __str__(self):
        return self.name
class ProductType(models.Model):
    name = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name

class ProductSpecification(models.Model):
    product_type = models.ForeignKey(ProductType,on_delete=models.RESTRICT)
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

    
class Product(models.Model):
    product_type = models.ForeignKey(ProductType,on_delete=models.RESTRICT)
    category = models.ForeignKey(Category,on_delete=models.RESTRICT)
    title = models.CharField(max_length=200)
    regular_price = models.DecimalField(
        verbose_name=_("Regular Price"),
        help_text=_("Maximum 99"),
        error_messages={
            "name":{
                "max_length":_("Please enter less than 99")
            }
        }
    )
    discount_price = models.DecimalField(
        verbose_name=_("Discount Price"),
        help_text=_("Maximum 99"),
        error_messages={
            "name":{
                "max_length":_("Discounted")
            }
        }


    )
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True,editable=False)
    updated_at = models.DateTimeField(auto_now_add=True, null=True)
    class Meta:
        ordering = ('-created_at')

    def get_absolute_url(self):
        return reverse("store:category list",args=[self.slug])

    def __str__(self):
        return self.title

class ProductSpecificationValue(models.Model):
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    specification=models.ForeignKey(ProductSpecification,on_delete=models.RESTRICT)
    value = models.CharField(max_length=200)

    def __str__(self):
        return self.value
class ProductImage(models.Model):
    product = models.ForeignKey(Product,related_name='product_image')
    image = models.ImageField(upload_to='images')
    default='default.png'
    alt_text = models.CharField(max_length=200,blank=True,null=True)
    is_feautre = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True,editable=False)
    updated_at = models.DateTimeField(auto_now_add=True, null=True)