# Generated by Django 3.0.8 on 2020-07-13 04:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20200713_0323'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='product',
            options={'verbose_name_plural': 'Productos'},
        ),
    ]