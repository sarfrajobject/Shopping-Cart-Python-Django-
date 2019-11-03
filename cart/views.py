# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from django.http import HttpResponse
from django.shortcuts import render
from.models import Product,Cart,Contact,subscribe
from django.template import RequestContext
from django.forms import ModelForm
from django.shortcuts import render, redirect, get_object_or_404
class PostsForm(ModelForm):
    class Meta:
        model = Contact
        fields = ['name','email','phone','country','desc']
# class form1(ModelForm):
#     class Meta:
#         model = Cart
#         fields = ['Qty']
# class subscribe(ModelForm):
#     class Meta:
#         model = subscribe
#         fields = ['name','email']


def home(request):
    products = Product.objects.all()
    return render(request,'home.html',{'products':products})
# def home(request):
#     product = (1,6)
#     products = Product.objects.all()[:3]
#     return render(request,'home.html',{'products':products})
def Cart1(request,id):
    # id=Product.id
    b = Cart(Qty = '1',item_id=id)
    # b = Cart.objects.get(item_id=1)
    b.save()
    return render(request, 'list.html', {'b': b})
def list(request):
    cart = Cart.objects.all()
    return render(request,'list.html',{'cart':cart})
# def home(request):
#     product = Product.objects.all()
#     page = request.GET.get('page', 1)

#     paginator = Paginator(product, 6)
#     try:
#         users = paginator.page(page)
#     except PageNotAnInteger:
#         users = paginator.page(1)
#     except EmptyPage:
#         users = paginator.page(paginator.num_pages)

#     return render(request, 'home.html', { 'users': users })  
# def Addcart(request):
#     cart = Cart(request.session)
#     product = Product.objects.get(id=request.GET.get('id'))
#     cart.add(product, price=product.price)
# #     return redirect('Cart.html')
# def Cart1(request,id,template_name ='contect.html'):
#     # form = Product.objects.get(id=id)
#     form = get_object_or_404(Cart, order_id=id)
#     form = form1(request.POST or None )
#     # request.POST['num']
#     # id
#     if form.is_valid():
#         form.save()
#         return redirect('products:home')
#     # form = Cart.objects(request.POST.get(user_id=user_id,Qty=Qty))
#     emp = 1
#     # sa =id
#     # order_id = Product.objects.get(id = order_id)
#     # user_id=id
#     return render(request, template_name, {'form': form})
# def Cart1(request):
#     if request.method == 'POST':
#         y = request.POST['Qty']
#         x = request.POST['order_id']
#         user = Cart.objects.create_user(y=Qty, x=order_id)
#         user.save()
#         return redirect('contect')
#
#     else:
#         return render(request, 'home.html')

def Addcart(request, pk, template_name ='contect.html'):
    post = get_object_or_404(blog_posts, pk=pk)
    if request.method == 'POST':
        post.delete()
        return redirect('blog_posts:post_list')
    return render(request, template_name, {'object': post})
    #if request.method=="POST":
        #id =request.POST.get('product.id')
        # Qty=1#request.POST.get('1')
        # cart=Cart.objectsrect(request,'cart.html').create_cart(order_id=12345, Qty=Qty)
        # cart.save();
        # return redi
def subscribe(request,template_name ='contect.html'):
    form = subscribe(request.POST or None )
    if form.is_valid():
        form.save()
        return redirect('products:home')
    return render(request, template_name, {'form': form})
def home1(request):
    numbers_list = range(1, 100)
    page = request.GET.get('page', 1)
    paginator = Paginator(numbers_list, 4)
    try:
        numbers = paginator.page(page)
    except PageNotAnInteger:
        numbers = paginator.page(1)
    except EmptyPage:
        numbers = paginator.page(paginator.num_pages)
    return render(request, 'home1.html', {'numbers': numbers})
def post_delete(request, pk, template_name='blog_posts/post_delete.html'):
    post = get_object_or_404(blog_posts, pk=pk)
    if request.method=='POST':
        post.delete()
        return redirect('blog_posts:post_list')
    # else:
    #     return HttpResponse(request,'cart.html')
def contact_us(request,template_name ='contect.html'):
	form = PostsForm(request.POST or None)
	if form.is_valid():
		form.save()
		# return redirect('contect')
	return render(request, template_name, {'form': form})	


def checkOut(request):
    cart = Cart.objects.all()
    return render(request,'checkOut.html',{'cart':cart})
def AddItem(request):
    cart = Cart.objects.all()
    return render(request, 'ajex.html', {'cart': cart})
def login(request):
    username = "not logged in"

    if request.method == "POST":
        # Get the posted form
        MyLoginForm = LoginForm(request.POST)

    if MyLoginForm.is_valid():
        username = MyLoginForm.cleaned_data['username']
    else:
        MyLoginForm = LoginForm()

    response = render_to_response(request, 'loggedin.html', {"username": username},
                                  context_instance=RequestContext(request))

    response.set_cookie('last_connection', datetime.datetime.now())
    response.set_cookie('username', datetime.datetime.now())

    return response

def setsession(request):
    request.session['sname'] = 'irfan'
    request.session['semail'] = 'irfan.sssit@gmail.com'
    return HttpResponse("session is set")
def getsession(request):
    studentname = request.session['sname']
    studentemail = request.session['semail']
    return HttpResponse(studentname+" "+studentemail);
# Create your views here.
def add(request):
    cart = Cart(request.session)
    product = Cart.objects.get(id=request.POST.get('id'))
    cart.add(product, price=product.price)
    added = True
    if request.is_ajax():
        print("Ajax request")
    json_data = {
        "added": added,
    }
    return JsonResponse(json_data)
    return redirect('list')

def remove(request):
    cart = Cart(request.session)
    product = Product.objects.get(id=request.GET.POST('id'))
    cart.remove_single(product)
    return redirect('list')

def show(request):
    return render(request, 'carts/ajex.html')

def cart_detail_api_view(request):
    # cart_obj, new_obj = Cart.objects.new_or_get(request)
    cart = Cart(request.session)
    products = [{"name": x.name, "price": x.price} for x in cart.products.all()]
    cart_data = {"products": products, "total": Cart.total}
    return JsonResponse(cart_data)
def post_delete(request, pk, template_name='contect.html'):
    post = get_object_or_404(Cart, pk=pk)
    if request.method=='POST':
        post.delete()
        return redirect('blog_posts:post_list')
    return render(request, template_name, {'object': post})
