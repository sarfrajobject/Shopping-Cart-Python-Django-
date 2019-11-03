from django.urls import path
from django.conf.urls import url
from.import views
urlpatterns = [
    # url(r'^Product/Cart1/(?P<pk>\d+)$', views.Cart1, name='post_edit'),
    path('',views.home,name = 'home'),
    # path('Cart',views.Cart,name = 'Cart'),
    path('subscribe',views.subscribe,name = 'subscribe'),
    path('Contact',views.contact_us,name = 'contact'),
    # path('Cart/checkOut',views.Buy,name = 'Buy'),
    path('login',views.login, name = 'login'),
    path('signup', views.setsession),
    path('gsession', views.getsession),
    # path('home2',views.home2,name = 'home2'),
    # url(r'^addtocart/(?P<cart_id>\d+)', views.Cart1)
    url(r'^home1$', views.home1, name='home1'),
    url(r'^list$', views.list, name='list'),
    # path('edit/<int:id>', views.editFunction, name='edit'),
    # url(r'^Add/(?P<pk>\d+)$', views.Addcart, name='Addcart'),
    url(r'^delete/(?P<pk>\d+)$', views.post_delete, name='post_delete'),
    url(r'^Cart1/(?P<id>\d+)$', views.Cart1, name='Cart1'),
    

]
