from django.shortcuts import render
from .models import Product, Order
from django.contrib import messages

def products(request):
    if request.method == 'POST':
        p = dict(request.POST.lists())
        Product(p).save()
        messages.success(request, "Guardado")
    prod = Product.objects.filter(is_active=True)
    messages.success(request, "Cargado")
    return render(
        request, 
        'products/index.html', 
        {'prod':prod}
    )

def orders(request):
    if request.method == 'POST':
        phone = request.POST['phone']
        payment = request.POST['payment']
        name = request.POST['name']
        email = request.POST['email']
        adress = request.POST['adress']
        message = request.POST['message']
        order = request.POST['order']
        total = request.POST['total']
        Order.objects.create(
            phone = phone,
            payment = payment,
            name = name,
            email = email,
            adress = adress,
            message = message,
            order = order,
            total = total
        )
        messages.success(request, "Guardado")
    return render(
        request, 
        'products/index.html',
    )
