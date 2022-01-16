from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Category)

class ProductSpecificationInline(admin.TabularInline):
    model = ProductSpecification
@admin.register(ProductType)
class ProductTypeAdmin(admin.ModelAdmin):
    inlines = [ProductSpecificationInline]


class ProductImageInline(admin.TabularInline):
    model = ProductImage
class ProductSpecificationValueInline(admin.TabularInline):
    model = ProductSpecificationValue 
@admin.register(Product)
class ProductTypeAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline,ProductSpecificationValueInline]