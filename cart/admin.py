# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from.models import Product,Offer,Cart,Contact,subscribe


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name','price','stock')
admin.site.register(Product,ProductAdmin)

class CartAdmin(admin.ModelAdmin):
    list_display = ('item_id','Qty')
admin.site.register(Cart,CartAdmin)

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name','email','phone','country','desc')
admin.site.register(Contact,ContactAdmin)

# Register your models here.
class OfferAdmin(admin.ModelAdmin):
    list_display = ('code', 'discount')
admin.site.register(Offer, OfferAdmin)

class subscribeAdmin(admin.ModelAdmin):
    list_display = ('name', 'email')
admin.site.register(subscribe, subscribeAdmin)
