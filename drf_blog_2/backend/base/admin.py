from django.contrib import admin

# Register your models here.
from .models import *
# admin.site.register(Product)
@admin.register(Product)
class Product_admin(admin.ModelAdmin):
    list_display =('name','category','product_type','price','created_at')




