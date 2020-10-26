from django.urls import path, include

from django.contrib import admin

admin.autodiscover()

from products import views


urlpatterns = [
    path("admin/", admin.site.urls),
    path('', views.products, name="products"),
    path('orders/', views.orders, name="orders"),

]
