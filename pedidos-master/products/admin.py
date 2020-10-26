from django.contrib import admin
from products import models

@admin.register(models.Product)
class ProductsAdmin(admin.ModelAdmin):
    list_display = ("name", "unit","quantity", "price", "product_type", "is_active")
    search_fields = ("name",)

    def save_model(self, request, obj, form, change):
        if not change:
            # the object is being created, so set the user
            obj.user = request.user
        obj.save()


@admin.register(models.Order)
class OrderAdmin(admin.ModelAdmin):
    pass
