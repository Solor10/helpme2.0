# Generated by Django 3.0.8 on 2020-07-26 02:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_auto_20200713_0413'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='unit',
            field=models.CharField(default='', max_length=100),
        ),
    ]