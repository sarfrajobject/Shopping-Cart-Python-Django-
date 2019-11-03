# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    stock = models.IntegerField()
    image_url = models.CharField(max_length = 2083)
    def __unicode__(self):
        return self.title

    def get_post_url(self):
        return reverse('post_edit', kwargs={'pk': self.pk})
class Cart(models.Model):
    
    item_id = models.IntegerField()
    Qty = models.IntegerField()

    def __str__(self):
        return self.Qty

class Contact(models.Model):
    msg_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=70, default="")
    country = models.CharField(max_length=70, default="")
    phone = models.CharField(max_length=70, default="")
    desc = models.CharField(max_length=500, default="")

class Offer(models.Model):
    code = models.CharField(max_length=10)
    description = models.CharField(max_length=255)
    discount = models.FloatField()

    def __unicode__(self):
        return self.title

    def get_post_url(self):
        return reverse('post_edit', kwargs={'pk': self.pk})

class subscribe(models.Model):
    name = models.CharField(max_length = 50)
    email = models.CharField(max_length=70, default="")

# Create your models here.
