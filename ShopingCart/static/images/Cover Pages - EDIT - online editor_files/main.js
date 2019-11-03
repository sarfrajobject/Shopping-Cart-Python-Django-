







/*
 $(document).on('click', '.panel-heading', function(){
 $(this).addClass('topImg');
 $(this).removeClass('collapse'); 
 
 console.log(this.id);
 
 $(this).parent().siblings().children('.panel-heading').removeClass('topImg');
 }) 

*/


function collapseUncollapse(id)
{
	
	if (id =="all")
	{
		//colapsamos todos los elementos
		$('.panel-collapse').addClass('collapse'); 
		
	}
	else
	{
	//colapsamos todos los elementos
	$('.panel-collapse').addClass('collapse'); 
	
	 $('#collapse'+id).removeClass('collapse'); 	
console.log($('#collapse'+id).attr('id'));

	}

}




$(document).on('click', '.panel-heading', function(){
//	 $(this).addClass('topImg');
//	 $(this).removeClass('collapse'); 
	 
	 console.log(this.id);
	 
	 $(this).parent().siblings().children('.panel-heading').addClass('collapse');
	 }) 


	 


$('.buttonDesigns').bind('click', function()
{
	
	click_button_template_or_categories = 1;	
	
	
   $('.contentDesign').show(); 
   $(this).toggleClass('active');
   $('.buttonBackgrounds, .buttonColors2,.buttonMyDesigns, .buttonSearch, .buttonColors, .buttonPhotos, .buttonBackground, .buttonTexts, .buttonObjects, .buttonUploads, .buttonEmojis, .buttonPaint').removeClass('active'); 
   $('.contentSearch, .contentPhotos, .contentBackground, .contentTexts, .contentObjects, .contentUploads').hide(); 
   $('.sidePanel').toggleClass('slideUpPanel');
   $('.sidebar').toggleClass('sideBarShow');
   $('.tooltipSelectDesign').removeClass('wideScreen');  
   selector_designs_photos_objects("buttonDesigns");  
   if($(this).hasClass('active')){
      $('.sidePanel').addClass('slideUpPanel');
      $('.sidebar').addClass('sideBarShow');
   } else if ($(this).not('.active')){
      $('.sidePanel').removeClass('slideUpPanel');
      $('.sidebar').removeClass('sideBarShow');
   }

});


$('.sideBarNav').bind('click', function()
		{


	//alert("VOLVEMOS A HACER GRANDE");
	
	
		});








$('.buttonBackgrounds').bind('click', function(){
   $(this).toggleClass('active');
   $('.tooltipSelectDesign').removeClass('wideScreen'); 
   $('.buttonDesigns, .buttonColors2, .buttonMyDesigns, .buttonSearch, .buttonColors, .buttonPhotos, .buttonBackground, .buttonTexts, .buttonObjects, .buttonUploads, .buttonEmojis, .buttonPaint').removeClass('active'); 
});

$('.buttonColors2').bind('click', function(){
   $('.contentDesign').show(); 
   $(this).toggleClass('active');
   $('.buttonBackgrounds, .buttonMyDesigns, .buttonSearch, .buttonColors, .buttonPhotos, .buttonBackground, .buttonTexts, .buttonObjects, .buttonUploads, .buttonEmojis, .buttonPaint').removeClass('active'); 
   $('.contentSearch, .contentPhotos, .contentBackground, .contentTexts, .contentObjects, .contentUploads').hide(); 
   $('.sidePanel').toggleClass('slideUpPanel');
   $('.sidebar').toggleClass('sideBarShow');
   $('.tooltipSelectDesign').removeClass('wideScreen');  
   cambioSubCategoria('colors')
   if($(this).hasClass('active')){
      $('.sidePanel').addClass('slideUpPanel');
      $('.sidebar').addClass('sideBarShow');
   } else if ($(this).not('.active')){
      $('.sidePanel').removeClass('slideUpPanel');
      $('.sidebar').removeClass('sideBarShow');
   }

});


$('.buttonNotas').bind('click', function(){
   $('.contentDesign').show(); 
   $(this).toggleClass('active');
   $('.buttonBackgrounds, .buttonMyDesigns, .buttonSearch, .buttonColors, .buttonPhotos, .buttonBackground, .buttonTexts, .buttonObjects, .buttonUploads, .buttonEmojis, .buttonPaint, .buttonColors2').removeClass('active'); 
   $('.contentSearch, .contentPhotos, .contentBackground, .contentTexts, .contentObjects, .contentUploads, .contentDesign').hide(); 
   $('.sidePanel').toggleClass('slideUpPanel');
   $('.sidebar').toggleClass('sideBarShow');
   $('.tooltipSelectDesign').removeClass('wideScreen');  
   cambioSubCategoria('Notas');
   if($(this).hasClass('active')){
      $('.sidePanel').addClass('slideUpPanel');
      $('.sidebar').addClass('sideBarShow');
   } else if ($(this).not('.active')){
      $('.sidePanel').removeClass('slideUpPanel');
      $('.sidebar').removeClass('sideBarShow');
   }

});


$('.buttonCapas').bind('click', function(){
   $('.contentDesign').show(); 
   $(this).toggleClass('active');
   $('.buttonBackgrounds, .buttonMyDesigns, .buttonNotas, .buttonSearch, .buttonColors, .buttonPhotos, .buttonBackground, .buttonTexts, .buttonObjects, .buttonUploads, .buttonEmojis, .buttonPaint, .buttonColors2').removeClass('active'); 
   $('.contentSearch, .contentPhotos, .contentBackground, .contentTexts, .contentObjects, .contentUploads, .contentDesign').hide(); 
   $('.sidePanel').toggleClass('slideUpPanel');
   $('.sidebar').toggleClass('sideBarShow');
   $('.tooltipSelectDesign').removeClass('wideScreen');  
   cambioSubCategoria('capas');
   if($(this).hasClass('active')){
      $('.sidePanel').addClass('slideUpPanel');
      $('.sidebar').addClass('sideBarShow');
   } else if ($(this).not('.active')){
      $('.sidePanel').removeClass('slideUpPanel');
      $('.sidebar').removeClass('sideBarShow');
   }

});







$('.buttonMyDesigns').bind('click', function(){
   $('.contentMyDesign').show(); 
   $(this).toggleClass('active');
   $('.buttonBackgrounds, .buttonColors2,.buttonDesigns, .buttonSearch, .buttonColors, .buttonPhotos, .buttonBackground, .buttonTexts, .buttonObjects, .buttonUploads, .buttonEmojis, .buttonPaint').removeClass('active'); 
   $('.contentSearch, .contentPhotos, .contentBackground, .contentTexts, .contentObjects, .contentUploads').hide(); 
   $('.sidePanel').toggleClass('slideUpPanel');
   $('.sidebar').toggleClass('sideBarShow');
   $('.tooltipSelectDesign').removeClass('wideScreen');  
   cambioSubCategoria('myDesigns');
   if($(this).hasClass('active')){
      $('.sidePanel').addClass('slideUpPanel');
      $('.sidebar').addClass('sideBarShow');
   } else if ($(this).not('.active')){
      $('.sidePanel').removeClass('slideUpPanel');
      $('.sidebar').removeClass('sideBarShow');
   }

});





$('.buttonSearch').bind('click', function(){
   $('.contentSearch').show();
   $(this).toggleClass('active');
   $('.buttonBackgrounds, .buttonColors2,.buttonMyDesigns, .buttonDesigns, .buttonColors, .buttonPhotos, .buttonBackground, .buttonTexts, .buttonObjects, .buttonUploads, .buttonEmojis, .buttonPaint').removeClass('active');
   $('.contentDesign, .contentPhotos, .contentBackground, .contentTexts, .contentObjects, .contentUploads').hide();
   $('.sidePanel').toggleClass('slideUpPanel');
   $('.sidebar').toggleClass('sideBarShow');
   $('.tooltipSelectDesign').removeClass('wideScreen'); 
   cambioSubCategoria('efectos');
   if($(this).hasClass('active')){
      $('.sidePanel').addClass('slideUpPanel');
      $('.sidebar').addClass('sideBarShow');
   } else if ($(this).not('.active')){
      $('.sidePanel').removeClass('slideUpPanel');
      $('.sidebar').removeClass('sideBarShow');
   }
});

$('.buttonPhotos').bind('click', function(){
   $('.contentPhotos').show();
   $(this).toggleClass('active');
   $('.buttonBackgrounds, .buttonColors2,.buttonMyDesigns, .buttonSearch, .buttonColors, .buttonDesigns, .buttonBackground, .buttonTexts, .buttonObjects, .buttonUploads, .buttonEmojis, .buttonPaint').removeClass('active');
   $('.contentSearch, .contentDesign, .contentBackground, .contentTexts, .contentObjects, .contentUploads').hide();
   $('.sidePanel').toggleClass('slideUpPanel');
   $('.sidebar').toggleClass('sideBarShow');
   $('.tooltipSelectDesign').removeClass('wideScreen'); 
   cambioSubCategoria('pegatinas');
   if($(this).hasClass('active')){
      $('.sidePanel').addClass('slideUpPanel');
      $('.sidebar').addClass('sideBarShow');
   } else if ($(this).not('.active')){
      $('.sidePanel').removeClass('slideUpPanel');
      $('.sidebar').removeClass('sideBarShow');
   }   
});


$('.buttonEmojis').bind('click', function(){
      $('.contentPhotos').show();
      $(this).toggleClass('active');
      $('.buttonBackgrounds, .buttonColors2,.buttonMyDesigns, .buttonPhotos, .buttonSearch, .buttonColors, .buttonDesigns, .buttonBackground, .buttonTexts, .buttonObjects, .buttonUploads, .buttonPaint').removeClass('active');
      $('.contentPhotos, .contentSearch, .contentDesign, .contentBackground, .contentTexts, .contentObjects, .contentUploads').hide();
      $('.sidePanel').toggleClass('slideUpPanel');
      $('.sidebar').toggleClass('sideBarShow');
      $('.tooltipSelectDesign').removeClass('wideScreen'); 
    cambioSubCategoria('emojis');
      if($(this).hasClass('active')){
         $('.sidePanel').addClass('slideUpPanel');
         $('.sidebar').addClass('sideBarShow');
      } else if ($(this).not('.active')){
         $('.sidePanel').removeClass('slideUpPanel');
         $('.sidebar').removeClass('sideBarShow');
      }   
   });

$('.buttonPaint').bind('click', function(){
      $('.contentPhotos').show();
      $(this).toggleClass('active');
      $('.buttonBackgrounds, .buttonColors2,.buttonMyDesigns, .buttonEmojis, .buttonPhotos, .buttonSearch, .buttonColors, .buttonDesigns, .buttonBackground, .buttonTexts, .buttonObjects, .buttonUploads, .buttonEmojis').removeClass('active');
      $('.contentPhotos, .contentSearch, .contentDesign, .contentBackground, .contentTexts, .contentObjects, .contentUploads').hide();
      $('.sidePanel').toggleClass('slideUpPanel');
      $('.sidebar').toggleClass('sideBarShow');
      $('.tooltipSelectDesign').removeClass('wideScreen'); 
/*    cambioSubCategoria('pegatinas');*/
      if($(this).hasClass('active')){
         $('.sidePanel').addClass('slideUpPanel');
         $('.sidebar').addClass('sideBarShow');
      } else if ($(this).not('.active')){
         $('.sidePanel').removeClass('slideUpPanel');
         $('.sidebar').removeClass('sideBarShow');
      }   
   });






/*
$('.buttonEmojis').bind('click', function(){
    
	
	

    $('.contentPhotos').show();
    $(this).toggleClass('active');
    $('.buttonBackgrounds, .buttonColors2,.buttonMyDesigns, .buttonEmojis, .buttonPhotos, .buttonSearch, .buttonColors, .buttonDesigns, .buttonBackground, .buttonTexts, .buttonObjects, .buttonUploads, .buttonEmojis').removeClass('active');
    $('.contentPhotos, .contentSearch, .contentDesign, .contentBackground, .contentTexts, .contentObjects, .contentUploads').hide();
    $('.sidePanel').toggleClass('slideUpPanel');
    $('.sidebar').toggleClass('sideBarShow');
    $('.tooltipSelectDesign').removeClass('wideScreen'); 
/*    cambioSubCategoria('pegatinas');*/
  

/*
if($(this).hasClass('active')){
       $('.sidePanel').addClass('slideUpPanel');
       $('.sidebar').addClass('sideBarShow');
    } else if ($(this).not('.active')){
       $('.sidePanel').removeClass('slideUpPanel');
       $('.sidebar').removeClass('sideBarShow');
    }   
 */
	
	

	   
	   
	   /*
	   if($(this).hasClass('active')){
	      $('.sidePanel').addClass('slideUpPanel');
	      $('.sidebar').addClass('sideBarShow');
	   } else if ($(this).not('.active')){
	      $('.sidePanel').removeClass('slideUpPanel');
	      $('.sidebar').removeClass('sideBarShow');
	   }	});
	   */
	   



/*
$('.buttonEmojis').bind('click', function(){
      $('.contentPhotos').show();
      $(this).toggleClass('active');
      $('.buttonBackgrounds, .buttonColors2,.buttonMyDesigns, .buttonPhotos, .buttonSearch, .buttonColors, .buttonDesigns, .buttonBackground, .buttonTexts, .buttonObjects, .buttonUploads').removeClass('active');
      $('.contentPhotos, .contentSearch, .contentDesign, .contentBackground, .contentTexts, .contentObjects, .contentUploads').hide();
      $('.sidePanel').toggleClass('slideUpPanel');
      $('.sidebar').toggleClass('sideBarShow');
      $('.tooltipSelectDesign').removeClass('wideScreen'); 

      if($(this).hasClass('active')){
         $('.sidePanel').addClass('slideUpPanel');
         $('.sidebar').addClass('sideBarShow');
      } else if ($(this).not('.active')){
         $('.sidePanel').removeClass('slideUpPanel');
         $('.sidebar').removeClass('sideBarShow');
      }   
      
      
      
      
   });
*/


/*buttonPaint*/


// $('.buttonBackground').bind('click', function(){
//    $('.contentBackground').show();
//    $(this).toggleClass('active');
//    $('.buttonSearch, .buttonPhotos, .buttonDesigns, .buttonTexts, .buttonObjects, .buttonUploads').removeClass('active');
//    $('.contentSearch, .contentDesign, .contentPhotos, .contentTexts, .contentObjects, .contentUploads').hide();
//    $('.sidePanel').toggleClass('slideUpPanel');
//    $('.sidePanel').addClass('sideBarShow');
//    $('.sidebar').removeClass('sideBarShow');   

// });

$('.buttonTexts').bind('click', function(){
   $('.contentTexts').show();
   $(this).toggleClass('active');
   $('.buttonBackgrounds, .buttonColors2,.buttonMyDesigns, .buttonSearch, .buttonColors, .buttonPhotos, .buttonBackground, .buttonDesigns, .buttonObjects, .buttonUploads, .buttonEmojis, .buttonPaint').removeClass('active');
   $('.contentSearch, .contentDesign, .contentPhotos, .contentBackground, .contentObjects, .contentUploads').hide();
   $('.sidePanel').toggleClass('slideUpPanel');
   $('.sidebar').toggleClass('sideBarShow');
   $('.tooltipSelectDesign').removeClass('wideScreen'); 
   cambioSubCategoria('texto');
   if($(this).hasClass('active')){
      $('.sidePanel').addClass('slideUpPanel');
      $('.sidebar').addClass('sideBarShow');
   } else if ($(this).not('.active')){
      $('.sidePanel').removeClass('slideUpPanel');
      $('.sidebar').removeClass('sideBarShow');
   }
});

$('.buttonObjects').bind('click', function(){
   // $('.contentObjects').show();
   $(this).toggleClass('active');
   $('.buttonBackgrounds, .buttonColors2,.buttonMyDesigns, .buttonSearch, .buttonColors, .buttonPhotos, .buttonBackground, .buttonTexts, .buttonDesigns, .buttonUploads, .buttonEmojis, .buttonPaint').removeClass('active');
   $('.contentDesign, .contentPhotos, .contentBackground, .contentTexts, .contentSearch, .contentUploads').hide();
   $('.sidePanel').toggleClass('slideUpPanel');
   $('.sidebar').toggleClass('sideBarShow');
   $('.tooltipSelectDesign').removeClass('wideScreen'); 
   cambioSubCategoria('recursos');
   if($(this).hasClass('active')){
      $('.sidePanel').addClass('slideUpPanel');
      $('.sidebar').addClass('sideBarShow');
   } else if ($(this).not('.active')){
      $('.sidePanel').removeClass('slideUpPanel');
      $('.sidebar').removeClass('sideBarShow');
   }
   
   
   try 
   {zt.hide($('#reemplazarImagen'));zt.hide($('#file_upload_button'));}
   catch (e){}   
   
});

$('.buttonColors').bind('click', function(){
  $('.buttonBackgrounds, .buttonColors2,.buttonMyDesigns, .buttonSearch, .buttonObjects, .buttonPhotos, .buttonBackground, .buttonTexts, .buttonDesigns, .buttonUploads, .buttonEmojis, .buttonPaint').removeClass('active');
   $(this).toggleClass('active');
   $('.sidePanel').toggleClass('slideUpPanel');
   $('.sidebar').toggleClass('sideBarShow');
   $('.tooltipSelectDesign').removeClass('wideScreen'); 
   cambioSubCategoria('colores');
   if($(this).hasClass('active')){
      $('.sidePanel').addClass('slideUpPanel');
      $('.sidebar').addClass('sideBarShow');
   } else if ($(this).not('.active')){
      $('.sidePanel').removeClass('slideUpPanel');
      $('.sidebar').removeClass('sideBarShow');
   }
});

// $('.buttonUploads').bind('click', function(){
//    $('.contentUploads').show();
//    $(this).toggleClass('active');
//    $('.buttonSearch, .buttonPhotos, .buttonBackground, .buttonTexts, .buttonObjects, .buttonDesigns').removeClass('active');
//    $('.contentDesign, .contentPhotos, .contentBackground, .contentTexts, .contentObjects, .contentSearch').hide();
//    $('.sidePanel').toggleClass('slideUpPanel');
//    $('.sidebar').addClass('sideBarShow');
//    $('.sidebar').removeClass('sideBarShow');   
// });


$('.closePanel').bind('click', function(){
	closePanel();
});

$('.canvas-container').bind('click', function(){
   $('.toolsWork').show();
});

$('.closePanels').bind('click', function(){
   $('.toolsWork').hide();
});

$('.toolsWork i').bind('click', function(){
   $(this).toggleClass('hoverColor');
});


$('.zoomOut').bind('click', function(){
   setZoomPlusMinus();
});


$('.zoomIn').bind('click', function(){
   setZoomPlusMinus();
});



$('.category-color button').click(function(e) {
    $(this).toggleClass('activing');
});

$('.category-options button').click(function(e) {
    $(this).toggleClass('actived');
});


$('.active-tooltip').bind('click', function(){
   $('.tooltip-floater').show(); 
});

$('.cerrar-button').bind('click', function(){
   $('.tooltip-floater').hide(); 
});



$('.userBlock .closeX').bind('click', function(){
   $('.userBlock').removeClass('activeOptionsUser');
});






$('.deleteMessage button').bind('click', function(){
   $(this).parent().hide(); 
});

$('.deleteButton').bind('click', function(){
   $(this).siblings('.deleteMessage').show(); 
});

$('.cambiar').bind('click', function(){
   $('.changeImageBox').addClass('showChange'); 
});

$('.hamburguer').bind('click', function(){
   $('nav').slideToggle('');
});

$('nav a').bind('click', function(){
   $('nav').slideUp('');
});

// $('.buttonDesigns a').bind('click', function(){
//    $('section').addClass('double-templates');
//    $(this).addClass('active');
//    $(this).toggleClass('changeMinor');
//    if($(this).hasClass('changeMinor')){
//       $('section').addClass('double-templates');
//    } else if ($(this).not('.changeMinor')){
//       $('section').removeClass('double-templates');
//    }
// });

$('#ampling a').bind('click', function(){
   $('section').toggleClass('double-templates');
   $('.tooltipSelectDesign').addClass('nimize');
});

$('#hideBar').bind('click', function(){  	
   $('section').removeClass('double-templates');		
	$(this).addClass('hide');
   $('.workspace').addClass('wide-nosidePanel');
   $('.sidebar').addClass('hidden-sidebar');
   $('.tooltipSelectDesign').addClass('wideScreen');
   
	$('.tooltipSelectDesign').removeClass('nimize');
   ajustar_canvas(ancho, alto);
   
});



$('.sidebarMenu').bind('click', function(){
   $('.sidebar').addClass('sideBarShow');
   $('.workspace').removeClass('wide-nosidePanel');
   $('.sidebar').removeClass('hidden-sidebar');
   $('.tooltipSelectDesign').removeClass('wideScreen');
   $('.desplegable-hidden').removeClass('hide');
   $('.tooltipSelectDesign').removeClass('nimize'); 
});
/*

question_mastercard_hover.onmouseover = question_mastercard_hover.onmouseout = handler;

function handler(event)
{

  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }

  log.value += event.type + ': ' +    'target=' + str(event.target) + ', relatedTarget=' + str(event.relatedTarget) + "\n";
  
  log.scrollTop = log.scrollHeight;

  if (event.type == 'mouseover') {
    event.target.style.background = 'pink';
  }
  if (event.type == 'mouseout') {
    event.target.style.background = '';
  }
}

*/



//https://dpo3tbth99ua1.cloudfront.net/assets/js/jquery.foggy.min.js
//Foggy, v1.1.1
//
//Description: jQuery plugin for blurring page elements
//Homepage:    http://nbartlomiej.github.com/foggy
//Author:      nbartlomiej@gmail.com
(function(e){e.fn.foggy=function(t){var n={opacity:.8,blurRadius:2,quality:16,cssFilterSupport:true};var r={opacity:1,blurRadius:0};var i;if(t==false){i=e.extend(n,r)}else{i=e.extend(n,t)}var s=function(e,t,n,r){this.content=e;this.position=t;this.offset=n;this.opacity=r};s.prototype.render=function(t){e("<div/>",{html:this.content,"class":"foggy-pass-"+this.position}).css({position:this.position,opacity:this.opacity,top:this.offset[0],left:this.offset[1]}).appendTo(t)};var o=function(e){this.radius=e};o.prototype.includes=function(e,t){if(Math.pow(e,2)+Math.pow(t,2)<=Math.pow(this.radius,2)){return true}else{return false}};o.prototype.points=function(){var e=[];for(var t=-this.radius;t<=this.radius;t++){for(var n=-this.radius;n<=this.radius;n++){if(this.includes(t,n)){e.push([t,n])}}}return e};var u=function(e,t){this.element=e;this.settings=t};u.prototype.calculateOffsets=function(t,n){var r=e.grep((new o(t)).points(),function(e){return e[0]!=0||e[1]!=0});var i;if(r.length<=n){i=r}else{var s=r.length-n;var u=[];for(var a=0;a<s;a++){u.push(Math.round(a*(r.length/s)))}i=e.grep(r,function(t,n){if(e.inArray(n,u)>=0){return false}else{return true}})}return i};u.prototype.getContent=function(){var t=e(this.element).find(".foggy-pass-relative")[0];if(t){return e(t).html()}else{return e(this.element).html()}};u.prototype.render=function(){var t=this.getContent();e(this.element).empty();var n=e("<div/>").css({position:"relative"});var r=this.calculateOffsets(this.settings.blurRadius*2,this.settings.quality);var i=this.settings.opacity*1.2/(r.length+1);(new s(t,"relative",[0,0],i)).render(n);e(r).each(function(e,r){(new s(t,"absolute",r,i)).render(n)});n.appendTo(this.element)};var a=function(e,t){this.element=e;this.settings=t};a.prototype.render=function(){var t=(""+i.opacity).slice(2,4);var n=this.settings.blurRadius;e(this.element).css({"-webkit-filter":"blur("+n+"px)",opacity:i.opacity})};return this.each(function(e,t){if(i.cssFilterSupport&&"-webkit-filter"in document.body.style){(new a(t,i)).render()}else{(new u(t,i)).render()}})}})(jQuery)


//lazyLoad https://davidwalsh.name/lazyload-plugin
var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.LazyLoad=t()}(this,function(){"use strict";var e={elements_selector:"img",container:document,threshold:300,data_src:"src",data_srcset:"srcset",class_loading:"loading",class_loaded:"loaded",class_error:"error",callback_load:null,callback_error:null,callback_set:null},t=function(e,t){return e.getAttribute("data-"+t)},n=function(e,t,n){return e.setAttribute("data-"+t,n)},r=function(e){return e.filter(function(e){return!t(e,"was-processed")})},s=function(e,t){var n,r=new e(t);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:r}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:r})}window.dispatchEvent(n)},o=function(e,n){var r=n.data_srcset,s=e.parentNode;if("PICTURE"===s.tagName)for(var o,a=0;o=s.children[a];a+=1)if("SOURCE"===o.tagName){var i=t(o,r);i&&o.setAttribute("srcset",i)}},a=function(e,n){var r=n.data_src,s=n.data_srcset,a=e.tagName,i=t(e,r);if("IMG"===a){o(e,n);var c=t(e,s);return c&&e.setAttribute("srcset",c),void(i&&e.setAttribute("src",i))}"IFRAME"!==a?i&&(e.style.backgroundImage='url("'+i+'")'):i&&e.setAttribute("src",i)},i="classList"in document.createElement("p"),c=function(e,t){i?e.classList.add(t):e.className+=(e.className?" ":"")+t},l=function(e,t){i?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},u=function(e,t){e&&e(t)},d=function(e,t,n){e.removeEventListener("load",t),e.removeEventListener("error",n)},f=function(e,t){var n=function n(s){v(s,!0,t),d(e,n,r)},r=function r(s){v(s,!1,t),d(e,n,r)};e.addEventListener("load",n),e.addEventListener("error",r)},v=function(e,t,n){var r=e.target;l(r,n.class_loading),c(r,t?n.class_loaded:n.class_error),u(t?n.callback_load:n.callback_error,r)},_=function(e,t){["IMG","IFRAME"].indexOf(e.tagName)>-1&&(f(e,t),c(e,t.class_loading)),a(e,t),n(e,"was-processed",!0),u(t.callback_set,e)},m=function(t,n){this._settings=_extends({},e,t),this._setObserver(),this.update(n)};m.prototype={_setObserver:function(){var e=this;if("IntersectionObserver"in window){var t=this._settings;this._observer=new IntersectionObserver(function(n){n.forEach(function(n){if(n.intersectionRatio>0){var r=n.target;_(r,t),e._observer.unobserve(r)}}),e._elements=r(e._elements)},{root:t.container===document?null:t.container,rootMargin:t.threshold+"px"})}},update:function(e){var t=this,n=this._settings,s=e||n.container.querySelectorAll(n.elements_selector);this._elements=r(Array.prototype.slice.call(s)),this._observer?this._elements.forEach(function(e){t._observer.observe(e)}):(this._elements.forEach(function(e){_(e,n)}),this._elements=r(this._elements))},destroy:function(){var e=this;this._observer&&(r(this._elements).forEach(function(t){e._observer.unobserve(t)}),this._observer=null),this._elements=null,this._settings=null}};var b=window.lazyLoadOptions;return b&&function(e,t){if(t.length)for(var n,r=0;n=t[r];r+=1)s(e,n);else s(e,t)}(m,b),m});

/*http://rawgit.com/bramstein/fontfaceobserver/master/fontfaceobserver.js*/
/* Font Face Observer v2.0.13 - © Bram Stein. License: BSD-3-Clause */(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());
(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function t(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;y(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,E=null,F=null;function G(){if(null===C)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C=!!a&&603>parseInt(a[1],10)}else C=!1;return C}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,D=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=D?b():document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),N=new Promise(function(a,c){q=setTimeout(c,D)});Promise.race([N,M]).then(function(){clearTimeout(q);a(c)},function(){b(c)})}else m(function(){function u(){var b;if(b=-1!=
f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==v&&g==v&&h==v||f==w&&g==w&&h==w||f==x&&g==x&&h==x)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(q),a(c))}function I(){if((new Date).getTime()-H>=D)d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,
g=n.a.offsetWidth,h=p.a.offsetWidth,u();q=setTimeout(I,50)}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,v=-1,w=-1,x=-1,d=document.createElement("div");d.dir="ltr";t(e,L(c,"sans-serif"));t(n,L(c,"serif"));t(p,L(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v=e.a.offsetWidth;w=n.a.offsetWidth;x=p.a.offsetWidth;I();z(e,function(a){f=a;u()});t(e,L(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;u()});t(n,L(c,'"'+c.family+'",serif'));
z(p,function(a){h=a;u()});t(p,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());




/*!
 * 
 *         SimpleBar.js - v2.6.1
 *         Scrollbars, simpler.
 *         https://grsmto.github.io/simplebar/
 *         
 *         Made by Adrien Grsmto from a fork by Jonathan Nicol
 *         Under MIT License
 *       
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleBar=e():t.SimpleBar=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=27)}([function(t,e,n){var r=n(23)("wks"),i=n(12),o=n(1).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(5),i=n(11);t.exports=n(7)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(6),i=n(33),o=n(34),s=Object.defineProperty;e.f=n(7)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports={}},function(t,e,n){var r=n(23)("keys"),i=n(12);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(1),i=n(3),o=n(4),s=n(18),c=n(19),a=function(t,e,n){var u,l,f,h,d=t&a.F,p=t&a.G,v=t&a.S,b=t&a.P,y=t&a.B,m=p?r:v?r[e]||(r[e]={}):(r[e]||{}).prototype,g=p?i:i[e]||(i[e]={}),E=g.prototype||(g.prototype={});p&&(n=e);for(u in n)l=!d&&m&&void 0!==m[u],f=(l?m:n)[u],h=y&&l?c(f,r):b&&"function"==typeof f?c(Function.call,f):f,m&&s(m,u,f,t&a.U),g[u]!=f&&o(g,u,h),b&&E[u]!=f&&(E[u]=f)};r.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(10),i=n(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(1),i=n(4),o=n(2),s=n(12)("src"),c=Function.toString,a=(""+c).split("toString");n(3).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var u="function"==typeof n;u&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(u&&(o(n,s)||i(n,s,t[e]?""+t[e]:a.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||c.call(this)})},function(t,e,n){var r=n(35);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(41),i=n(9);t.exports=function(t){return r(i(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(8),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(1),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(5).f,i=n(2),o=n(0)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n(28);var c=r(n(53)),a=r(n(54)),u=r(n(56));n(57),Object.assign=n(58);var l=function(){function t(e,n){i(this,t),this.el=e,this.flashTimeout,this.contentEl,this.scrollContentEl,this.dragOffset={x:0,y:0},this.isVisible={x:!0,y:!0},this.scrollOffsetAttr={x:"scrollLeft",y:"scrollTop"},this.sizeAttr={x:"offsetWidth",y:"offsetHeight"},this.scrollSizeAttr={x:"scrollWidth",y:"scrollHeight"},this.offsetAttr={x:"left",y:"top"},this.globalObserver,this.mutationObserver,this.resizeObserver,this.currentAxis,this.isRtl,this.options=Object.assign({},t.defaultOptions,n),this.classNames=this.options.classNames,this.scrollbarWidth=(0,c.default)(),this.offsetSize=20,this.flashScrollbar=this.flashScrollbar.bind(this),this.onDragY=this.onDragY.bind(this),this.onDragX=this.onDragX.bind(this),this.onScrollY=this.onScrollY.bind(this),this.onScrollX=this.onScrollX.bind(this),this.drag=this.drag.bind(this),this.onEndDrag=this.onEndDrag.bind(this),this.onMouseEnter=this.onMouseEnter.bind(this),this.recalculate=(0,a.default)(this.recalculate,100,{leading:!0}),this.init()}return s(t,[{key:"init",value:function(){this.el.SimpleBar=this,this.initDOM(),this.scrollbarX=this.trackX.querySelector(".".concat(this.classNames.scrollbar)),this.scrollbarY=this.trackY.querySelector(".".concat(this.classNames.scrollbar)),this.isRtl="rtl"===getComputedStyle(this.contentEl).direction,this.scrollContentEl.style[this.isRtl?"paddingLeft":"paddingRight"]="".concat(this.scrollbarWidth||this.offsetSize,"px"),this.scrollContentEl.style.marginBottom="-".concat(2*this.scrollbarWidth||this.offsetSize,"px"),this.contentEl.style.paddingBottom="".concat(this.scrollbarWidth||this.offsetSize,"px"),0!==this.scrollbarWidth&&(this.contentEl.style[this.isRtl?"marginLeft":"marginRight"]="-".concat(this.scrollbarWidth,"px")),this.recalculate(),this.initListeners()}},{key:"initDOM",value:function(){var t=this;if(Array.from(this.el.children).filter(function(e){return e.classList.contains(t.classNames.scrollContent)}).length)this.trackX=this.el.querySelector(".".concat(this.classNames.track,".horizontal")),this.trackY=this.el.querySelector(".".concat(this.classNames.track,".vertical")),this.scrollContentEl=this.el.querySelector(".".concat(this.classNames.scrollContent)),this.contentEl=this.el.querySelector(".".concat(this.classNames.content));else{for(this.scrollContentEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.scrollContentEl.classList.add(this.classNames.scrollContent),this.contentEl.classList.add(this.classNames.content);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.scrollContentEl.appendChild(this.contentEl),this.el.appendChild(this.scrollContentEl)}if(!this.trackX||!this.trackY){var e=document.createElement("div"),n=document.createElement("div");e.classList.add(this.classNames.track),n.classList.add(this.classNames.scrollbar),e.appendChild(n),this.trackX=e.cloneNode(!0),this.trackX.classList.add("horizontal"),this.trackY=e.cloneNode(!0),this.trackY.classList.add("vertical"),this.el.insertBefore(this.trackX,this.el.firstChild),this.el.insertBefore(this.trackY,this.el.firstChild)}this.el.setAttribute("data-simplebar","init")}},{key:"initListeners",value:function(){var t=this;this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),this.scrollbarY.addEventListener("mousedown",this.onDragY),this.scrollbarX.addEventListener("mousedown",this.onDragX),this.scrollContentEl.addEventListener("scroll",this.onScrollY),this.contentEl.addEventListener("scroll",this.onScrollX),"undefined"!=typeof MutationObserver&&(this.mutationObserver=new MutationObserver(function(e){e.forEach(function(e){(t.isChildNode(e.target)||e.addedNodes.length)&&t.recalculate()})}),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this.resizeObserver=new u.default(this.recalculate.bind(this)),this.resizeObserver.observe(this.el)}},{key:"removeListeners",value:function(){this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),this.scrollbarX.removeEventListener("mousedown",this.onDragX),this.scrollbarY.removeEventListener("mousedown",this.onDragY),this.scrollContentEl.removeEventListener("scroll",this.onScrollY),this.contentEl.removeEventListener("scroll",this.onScrollX),this.mutationObserver.disconnect(),this.resizeObserver.disconnect()}},{key:"onDragX",value:function(t){this.onDrag(t,"x")}},{key:"onDragY",value:function(t){this.onDrag(t,"y")}},{key:"onDrag",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y";t.preventDefault();var n="y"===e?this.scrollbarY:this.scrollbarX,r="y"===e?t.pageY:t.pageX;this.dragOffset[e]=r-n.getBoundingClientRect()[this.offsetAttr[e]],this.currentAxis=e,document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.onEndDrag)}},{key:"drag",value:function(t){var e,n,r;t.preventDefault(),"y"===this.currentAxis?(e=t.pageY,n=this.trackY,r=this.scrollContentEl):(e=t.pageX,n=this.trackX,r=this.contentEl);var i=e-n.getBoundingClientRect()[this.offsetAttr[this.currentAxis]]-this.dragOffset[this.currentAxis],o=i/n[this.sizeAttr[this.currentAxis]],s=o*this.contentEl[this.scrollSizeAttr[this.currentAxis]];r[this.scrollOffsetAttr[this.currentAxis]]=s}},{key:"onEndDrag",value:function(){document.removeEventListener("mousemove",this.drag),document.removeEventListener("mouseup",this.onEndDrag)}},{key:"resizeScrollbar",value:function(){var t,e,n,r,i,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";"x"===o?(t=this.trackX,e=this.scrollbarX,n=this.contentEl[this.scrollOffsetAttr[o]],r=this.contentSizeX,i=this.scrollbarXSize):(t=this.trackY,e=this.scrollbarY,n=this.scrollContentEl[this.scrollOffsetAttr[o]],r=this.contentSizeY,i=this.scrollbarYSize);var s=i/r,c=n/(r-i),a=Math.max(~~(s*i),this.options.scrollbarMinSize),u=~~((i-a)*c);this.isVisible[o]=i<r,this.isVisible[o]||this.options.forceVisible?(t.style.visibility="visible",this.options.forceVisible?e.style.visibility="hidden":e.style.visibility="visible","x"===o?(e.style.left="".concat(u,"px"),e.style.width="".concat(a,"px")):(e.style.top="".concat(u,"px"),e.style.height="".concat(a,"px"))):t.style.visibility="hidden"}},{key:"onScrollX",value:function(){this.flashScrollbar("x")}},{key:"onScrollY",value:function(){this.flashScrollbar("y")}},{key:"onMouseEnter",value:function(){this.flashScrollbar("x"),this.flashScrollbar("y")}},{key:"flashScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.resizeScrollbar(t),this.showScrollbar(t)}},{key:"showScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.isVisible[t]&&("x"===t?this.scrollbarX.classList.add("visible"):this.scrollbarY.classList.add("visible"),this.options.autoHide&&("number"==typeof this.flashTimeout&&window.clearTimeout(this.flashTimeout),this.flashTimeout=window.setTimeout(this.hideScrollbar.bind(this),1e3)))}},{key:"hideScrollbar",value:function(){this.scrollbarX.classList.remove("visible"),this.scrollbarY.classList.remove("visible"),"number"==typeof this.flashTimeout&&window.clearTimeout(this.flashTimeout)}},{key:"recalculate",value:function(){this.contentSizeX=this.contentEl[this.scrollSizeAttr.x],this.contentSizeY=this.contentEl[this.scrollSizeAttr.y]-(this.scrollbarWidth||this.offsetSize),this.scrollbarXSize=this.trackX[this.sizeAttr.x],this.scrollbarYSize=this.trackY[this.sizeAttr.y],this.resizeScrollbar("x"),this.resizeScrollbar("y"),this.options.autoHide||(this.showScrollbar("x"),this.showScrollbar("y"))}},{key:"getScrollElement",value:function(){return"y"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y")?this.scrollContentEl:this.contentEl}},{key:"getContentElement",value:function(){return this.contentEl}},{key:"unMount",value:function(){this.removeListeners(),this.el.SimpleBar=null}},{key:"isChildNode",value:function(t){return null!==t&&(t===this.el||this.isChildNode(t.parentNode))}}],[{key:"initHtmlApi",value:function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(function(e){e.forEach(function(e){Array.from(e.addedNodes).forEach(function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!e.SimpleBar&&new t(e,t.getElOptions(e)):Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e){!e.SimpleBar&&new t(e,t.getElOptions(e))}))}),Array.from(e.removedNodes).forEach(function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?t.SimpleBar&&t.SimpleBar.unMount():Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function(t){t.SimpleBar&&t.SimpleBar.unMount()}))})})}),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements.bind(this)):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))}},{key:"getElOptions",value:function(e){return Object.keys(t.htmlAttributes).reduce(function(n,r){var i=t.htmlAttributes[r];return e.hasAttribute(i)&&(n[r]=JSON.parse(e.getAttribute(i)||!0)),n},{})}},{key:"removeObserver",value:function(){this.globalObserver.disconnect()}},{key:"initDOMLoadedElements",value:function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(e){e.SimpleBar||new t(e,t.getElOptions(e))})}},{key:"defaultOptions",get:function(){return{autoHide:!0,forceVisible:!1,classNames:{content:"simplebar-content",scrollContent:"simplebar-scroll-content",scrollbar:"simplebar-scrollbar",track:"simplebar-track"},scrollbarMinSize:25}}},{key:"htmlAttributes",get:function(){return{autoHide:"data-simplebar-auto-hide",forceVisible:"data-simplebar-force-visible",scrollbarMinSize:"data-simplebar-scrollbar-min-size"}}}]),t}();e.default=l,l.initHtmlApi()},function(t,e,n){n(29),n(46),t.exports=n(3).Array.from},function(t,e,n){"use strict";var r=n(30)(!0);n(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(8),i=n(9);t.exports=function(t){return function(e,n){var o,s,c=String(i(e)),a=r(n),u=c.length;return a<0||a>=u?t?"":void 0:(o=c.charCodeAt(a),o<55296||o>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):o:t?c.slice(a,a+2):s-56320+(o-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(32),i=n(15),o=n(18),s=n(4),c=n(2),a=n(13),u=n(36),l=n(25),f=n(45),h=n(0)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,v,b,y,m){u(n,e,v);var g,E,O,_=function(t){if(!d&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",w="values"==b,S=!1,A=t.prototype,k=A[h]||A["@@iterator"]||b&&A[b],j=k||_(b),M=b?w?_("entries"):j:void 0,L="Array"==e?A.entries||k:k;if(L&&(O=f(L.call(new t)))!==Object.prototype&&O.next&&(l(O,x,!0),r||c(O,h)||s(O,h,p)),w&&k&&"values"!==k.name&&(S=!0,j=function(){return k.call(this)}),r&&!m||!d&&!S&&A[h]||s(A,h,j),a[e]=j,a[x]=p,b)if(g={values:w?j:_("values"),keys:y?j:_("keys"),entries:M},m)for(E in g)E in A||o(A,E,g[E]);else i(i.P+i.F*(d||S),e,g);return g}},function(t,e){t.exports=!1},function(t,e,n){t.exports=!n(7)&&!n(16)(function(){return 7!=Object.defineProperty(n(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(37),i=n(11),o=n(25),s={};n(4)(s,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(6),i=n(38),o=n(24),s=n(14)("IE_PROTO"),c=function(){},a=function(){var t,e=n(17)("iframe"),r=o.length;for(e.style.display="none",n(44).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[o[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[s]=t):n=a(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(5),i=n(6),o=n(39);t.exports=n(7)?Object.defineProperties:function(t,e){i(t);for(var n,s=o(e),c=s.length,a=0;c>a;)r.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var r=n(40),i=n(24);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(2),i=n(20),o=n(42)(!1),s=n(14)("IE_PROTO");t.exports=function(t,e){var n,c=i(t),a=0,u=[];for(n in c)n!=s&&r(c,n)&&u.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~o(u,n)||u.push(n));return u}},function(t,e,n){var r=n(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(20),i=n(22),o=n(43);t.exports=function(t){return function(e,n,s){var c,a=r(e),u=i(a.length),l=o(s,u);if(t&&n!=n){for(;u>l;)if((c=a[l++])!=c)return!0}else for(;u>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(8),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(2),i=n(26),o=n(14)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){"use strict";var r=n(19),i=n(15),o=n(26),s=n(47),c=n(48),a=n(22),u=n(49),l=n(50);i(i.S+i.F*!n(52)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,f,h=o(t),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,b=void 0!==v,y=0,m=l(h);if(b&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==m||d==Array&&c(m))for(e=a(h.length),n=new d(e);e>y;y++)u(n,y,b?v(h[y],y):h[y]);else for(f=m.call(h),n=new d;!(i=f.next()).done;y++)u(n,y,b?s(f,v,[i.value,y],!0):i.value);return n.length=y,n}})},function(t,e,n){var r=n(6);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(13),i=n(0)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){"use strict";var r=n(5),i=n(11);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(51),i=n(0)("iterator"),o=n(13);t.exports=n(3).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(21),i=n(0)("toStringTag"),o="Arguments"==r(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),i))?n:o?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(0)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],s=o[r]();s.next=function(){return{done:n=!0}},o[r]=function(){return s},t(o)}catch(t){}return n}},function(t,e,n){var r,i,o;/*! scrollbarWidth.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
!function(n,s){i=[],r=s,void 0!==(o="function"==typeof r?r.apply(e,i):r)&&(t.exports=o)}(0,function(){"use strict";function t(){if("undefined"==typeof document)return 0;var t,e=document.body,n=document.createElement("div"),r=n.style;return r.position="absolute",r.top=r.left="-9999px",r.width=r.height="100px",r.overflow="scroll",e.appendChild(n),t=n.offsetWidth-n.clientWidth,e.removeChild(n),t}return t})},function(t,e,n){(function(e){function n(t,e,n){function i(e){var n=v,r=b;return v=b=void 0,w=e,m=t.apply(r,n)}function o(t){return w=t,g=setTimeout(l,e),S?i(t):m}function a(t){var n=t-x,r=t-w,i=e-n;return A?O(i,y-r):i}function u(t){var n=t-x,r=t-w;return void 0===x||n>=e||n<0||A&&r>=y}function l(){var t=_();if(u(t))return f(t);g=setTimeout(l,a(t))}function f(t){return g=void 0,k&&v?i(t):(v=b=void 0,m)}function h(){void 0!==g&&clearTimeout(g),w=0,v=x=b=g=void 0}function d(){return void 0===g?m:f(_())}function p(){var t=_(),n=u(t);if(v=arguments,b=this,x=t,n){if(void 0===g)return o(x);if(A)return g=setTimeout(l,e),i(x)}return void 0===g&&(g=setTimeout(l,e)),m}var v,b,y,m,g,x,w=0,S=!1,A=!1,k=!0;if("function"!=typeof t)throw new TypeError(c);return e=s(e)||0,r(n)&&(S=!!n.leading,A="maxWait"in n,y=A?E(s(n.maxWait)||0,e):y,k="trailing"in n?!!n.trailing:k),p.cancel=h,p.flush=d,p}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function i(t){return!!t&&"object"==typeof t}function o(t){return"symbol"==typeof t||i(t)&&g.call(t)==u}function s(t){if("number"==typeof t)return t;if(o(t))return a;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=h.test(t);return n||d.test(t)?p(t.slice(2),n?2:8):f.test(t)?a:+t}var c="Expected a function",a=NaN,u="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,d=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,b="object"==typeof self&&self&&self.Object===Object&&self,y=v||b||Function("return this")(),m=Object.prototype,g=m.toString,E=Math.max,O=Math.min,_=function(){return y.Date.now()};t.exports=n}).call(e,n(55))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function r(t){return parseFloat(t)||0}function i(t){return Array.prototype.slice.call(arguments,1).reduce(function(e,n){return e+r(t["border-"+n+"-width"])},0)}function o(t){for(var e=["top","right","bottom","left"],n={},i=0,o=e;i<o.length;i+=1){var s=o[i],c=t["padding-"+s];n[s]=r(c)}return n}function s(t){var e=t.getBBox();return f(0,0,e.width,e.height)}function c(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return _;var s=getComputedStyle(t),c=o(s),u=c.left+c.right,l=c.top+c.bottom,h=r(s.width),d=r(s.height);if("border-box"===s.boxSizing&&(Math.round(h+u)!==e&&(h-=i(s,"left","right")+u),Math.round(d+l)!==n&&(d-=i(s,"top","bottom")+l)),!a(t)){var p=Math.round(h+u)-e,v=Math.round(d+l)-n;1!==Math.abs(p)&&(h-=p),1!==Math.abs(v)&&(d-=v)}return f(c.left,c.top,h,d)}function a(t){return t===document.documentElement}function u(t){return d?x(t)?s(t):c(t):_}function l(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return O(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}function f(t,e,n,r){return{x:t,y:e,width:n,height:r}}Object.defineProperty(e,"__esModule",{value:!0});var h=function(){function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return"undefined"!=typeof Map?Map:function(){function e(){this.__entries__=[]}var n={size:{}};return n.size.get=function(){return this.__entries__.length},e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n+=1){var i=r[n];t.call(e,i[1],i[0])}},Object.defineProperties(e.prototype,n),e}()}(),d="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,p=function(){return"function"==typeof requestAnimationFrame?requestAnimationFrame:function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),v=2,b=function(t,e){function n(){o&&(o=!1,t()),s&&i()}function r(){p(n)}function i(){var t=Date.now();if(o){if(t-c<v)return;s=!0}else o=!0,s=!1,setTimeout(r,e);c=t}var o=!1,s=!1,c=0;return i},y=["top","right","bottom","left","width","height","size","weight"],m="undefined"!=typeof navigator&&/Trident\/.*rv:11/.test(navigator.userAgent),g="undefined"!=typeof MutationObserver&&!m,E=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=b(this.refresh.bind(this),20)};E.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},E.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},E.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},E.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},E.prototype.connect_=function(){d&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),g?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},E.prototype.disconnect_=function(){d&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},E.prototype.onTransitionEnd_=function(t){var e=t.propertyName;y.some(function(t){return!!~e.indexOf(t)})&&this.refresh()},E.getInstance=function(){return this.instance_||(this.instance_=new E),this.instance_},E.instance_=null;var O=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n+=1){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},_=f(0,0,0,0),x=function(){return"undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof SVGGraphicsElement}:function(t){return t instanceof SVGElement&&"function"==typeof t.getBBox}}(),w=function(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=f(0,0,0,0),this.target=t};w.prototype.isActive=function(){var t=u(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},w.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var S=function(t,e){var n=l(e);O(this,{target:t,contentRect:n})},A=function(t,e,n){if("function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.activeObservations_=[],this.observations_=new h,this.callback_=t,this.controller_=e,this.callbackCtx_=n};A.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new w(t)),this.controller_.addObserver(this),this.controller_.refresh())}},A.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},A.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},A.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},A.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new S(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},A.prototype.clearActive=function(){this.activeObservations_.splice(0)},A.prototype.hasActive=function(){return this.activeObservations_.length>0};var k="undefined"!=typeof WeakMap?new WeakMap:new h,j=function(t){if(!(this instanceof j))throw new TypeError("Cannot call a class as a function");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=E.getInstance(),n=new A(t,e,this);k.set(this,n)};["observe","unobserve","disconnect"].forEach(function(t){j.prototype[t]=function(){return(e=k.get(this))[t].apply(e,arguments);var e}});var M=function(){return"undefined"!=typeof ResizeObserver?ResizeObserver:j}();e.default=M},function(t,e){},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}


/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,c,a=r(t),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var l in n)o.call(n,l)&&(a[l]=n[l]);if(i){c=i(n);for(var f=0;f<c.length;f++)s.call(n,c[f])&&(a[c[f]]=n[c[f]])}}return a}}]).default});


//https://github.com/c0bra/color-scheme-js
(function(){var t,e=[].slice;t=function(){function t(){var e,n;for(e=[],n=1;n<=4;n++)e.push(new t.mutablecolor(60));this.col=e,this._scheme="mono",this._distance=.5,this._web_safe=!1,this._add_complement=!1}var n,r,o,a,i,u;for(i=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},t.SCHEMES={},a="mono monochromatic contrast triade tetrade analogic".split(/\s+/),r=0,o=a.length;r<o;r++)u=a[r],t.SCHEMES[u]=!0;return t.PRESETS={default:[-1,-1,1,-.7,.25,1,.5,1],pastel:[.5,-.9,.5,.5,.1,.9,.75,.75],soft:[.3,-.8,.3,.5,.1,.9,.5,.75],light:[.25,1,.5,.75,.1,1,.5,1],hard:[1,-1,1,-.6,.1,1,.6,1],pale:[.1,-.85,.1,.5,.1,1,.1,.75]},t.COLOR_WHEEL={0:[255,0,0,100],15:[255,51,0,100],30:[255,102,0,100],45:[255,128,0,100],60:[255,153,0,100],75:[255,178,0,100],90:[255,204,0,100],105:[255,229,0,100],120:[255,255,0,100],135:[204,255,0,100],150:[153,255,0,100],165:[51,255,0,100],180:[0,204,0,80],195:[0,178,102,70],210:[0,153,153,60],225:[0,102,178,70],240:[0,51,204,80],255:[25,25,178,70],270:[51,0,153,60],285:[64,0,153,60],300:[102,0,153,60],315:[153,0,153,60],330:[204,0,153,80],345:[229,0,102,90]},t.prototype.colors=function(){var t,e,n,r,o,a,i,u,s;if(s=1,e=this.col[0].get_hue(),t={mono:function(t){return function(){}}(),contrast:function(t){return function(){return s=2,t.col[1].set_hue(e),t.col[1].rotate(180)}}(this),triade:function(t){return function(){var n;return s=3,n=60*t._distance,t.col[1].set_hue(e),t.col[1].rotate(180-n),t.col[2].set_hue(e),t.col[2].rotate(180+n)}}(this),tetrade:function(t){return function(){var n;return s=4,n=90*t._distance,t.col[1].set_hue(e),t.col[1].rotate(180),t.col[2].set_hue(e),t.col[2].rotate(180+n),t.col[3].set_hue(e),t.col[3].rotate(n)}}(this),analogic:function(t){return function(){var n;return s=t._add_complement?4:3,n=60*t._distance,t.col[1].set_hue(e),t.col[1].rotate(n),t.col[2].set_hue(e),t.col[2].rotate(360-n),t.col[3].set_hue(e),t.col[3].rotate(180)}}(this)},t.monochromatic=t.mono,null==t[this._scheme])throw"Unknown color scheme name: "+this._scheme;for(t[this._scheme](),i=[],n=o=0,u=s-1;0<=u?o<=u:o>=u;n=0<=u?++o:--o)for(r=a=0;a<=3;r=++a)i[4*n+r]=this.col[n].get_hex(this._web_safe,r);return i},t.prototype.colorset=function(){var t,e;for(t=n(this.colors()),e=[];t.length>0;)e.push(t.splice(0,4));return e},t.prototype.from_hue=function(t){if(null==t)throw"from_hue needs an argument";return this.col[0].set_hue(t),this},t.prototype.rgb2ryb=function(){var t,n,r,o,a,u,s,h,l;return s=1<=arguments.length?e.call(arguments,0):[],null!=s[0]&&i(s[0])&&(s=s[0]),u=s[0],n=s[1],t=s[2],h=Math.min(u,n,t),u-=h,n-=h,t-=h,o=Math.max(u,n,t),l=Math.min(u,n),u-=l,n-=l,t>0&&n>0&&(t/=2,n/=2),l+=n,t+=n,a=Math.max(u,l,t),a>0&&(r=o/a,u*=r,l*=r,t*=r),u+=h,l+=h,t+=h,[Math.floor(u),Math.floor(l),Math.floor(t)]},t.prototype.rgb2hsv=function(){var t,n,r,o,a,u,s,h,l,c;return h=1<=arguments.length?e.call(arguments,0):[],null!=h[0]&&i(h[0])&&(h=h[0]),s=h[0],r=h[1],t=h[2],s/=255,r/=255,t/=255,u=Math.min.apply(Math,[s,r,t]),a=Math.max.apply(Math,[s,r,t]),n=a-u,c=a,n>0?(l=n/a,o=s===a?(r-t)/n:r===a?2+(t-s)/n:4+(s-r)/n,o*=60,o%=360,[o,l,c]):[0,0,c]},t.prototype.rgbToHsv=function(){var t,n,r,o,a,u,s,h,l,c;if(h=1<=arguments.length?e.call(arguments,0):[],null!=h[0]&&i(h[0])&&(h=h[0]),s=h[0],r=h[1],t=h[2],s/=255,r/=255,t/=255,a=Math.max(s,r,t),u=Math.min(s,r,t),o=void 0,l=void 0,c=a,n=a-u,l=0===a?0:n/a,a===u)o=0;else{switch(a){case s:o=(r-t)/n+(r<t?6:0);break;case r:o=(t-s)/n+2;break;case t:o=(s-r)/n+4}o/=6}return[o,l,c]},t.prototype.from_hex=function(t){var e,n,r,o,a,i,u,s,h,l,c;if(null==t)throw"from_hex needs an argument";if(!/^([0-9A-F]{2}){3}$/im.test(t))throw"from_hex("+t+") - argument must be in the form of RRGGBB";return h=/(..)(..)(..)/.exec(t).slice(1,4),u=function(){var t,e,n;for(n=[],e=0,t=h.length;e<t;e++)a=h[e],n.push(parseInt(a,16));return n}(),i=u[0],n=u[1],e=u[2],s=this.rgb2ryb([i,n,e]),i=s[0],n=s[1],e=s[2],o=this.rgbToHsv(i,n,e),o[0],0,1e3,null,null,r=null,l=null,c=null,r=o[0],l=o[1],c=o[2],this.from_hue(360*r),this._set_variant_preset([l,c,l,.7*c,.25*l,1,.5*l,1]),this},t.prototype.add_complement=function(t){if(null==t)throw"add_complement needs an argument";return this._add_complement=t,this},t.prototype.web_safe=function(t){if(null==t)throw"web_safe needs an argument";return this._web_safe=t,this},t.prototype.distance=function(t){if(null==t)throw"distance needs an argument";if(t<0)throw"distance("+t+") - argument must be >= 0";if(t>1)throw"distance("+t+") - argument must be <= 1";return this._distance=t,this},t.prototype.scheme=function(e){if(null==e)return this._scheme;if(null==t.SCHEMES[e])throw"'"+e+"' isn't a valid scheme name";return this._scheme=e,this},t.prototype.variation=function(e){if(null==e)throw"variation needs an argument";if(null==t.PRESETS[e])throw"'$v' isn't a valid variation name";return this._set_variant_preset(t.PRESETS[e]),this},t.prototype._set_variant_preset=function(t){var e,n,r;for(r=[],e=n=0;n<=3;e=++n)r.push(this.col[e].set_variant_preset(t));return r},n=function(t){var e,r,o;if(null==t||"object"!=typeof t)return t;if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return e="",null!=t.global&&(e+="g"),null!=t.ignoreCase&&(e+="i"),null!=t.multiline&&(e+="m"),null!=t.sticky&&(e+="y"),new RegExp(t.source,e);o=new t.constructor;for(r in t)o[r]=n(t[r]);return o},t.mutablecolor=function(){function e(e){if(null==e)throw"No hue specified";this.saturation=[],this.value=[],this.base_red=0,this.base_green=0,this.base_blue=0,this.base_saturation=0,this.base_value=0,this.set_hue(e),this.set_variant_preset(t.PRESETS.default)}return e.prototype.hue=0,e.prototype.saturation=[],e.prototype.value=[],e.prototype.base_red=0,e.prototype.base_green=0,e.prototype.base_saturation=0,e.prototype.base_value=0,e.prototype.get_hue=function(){return this.hue},e.prototype.set_hue=function(e){var n,r,o,a,i,u,s,h,l,c;n=function(t,e,n){return t+Math.round((e-t)*n)},this.hue=Math.round(e%360),i=this.hue%15+(this.hue-Math.floor(this.hue)),c=i/15,u=this.hue-Math.floor(i),s=(u+15)%360,360===u&&(u=0),360===s&&(s=0),o=t.COLOR_WHEEL[u],a=t.COLOR_WHEEL[s],h={red:0,green:1,blue:2,value:3};for(r in h)l=h[r],this["base_"+r]=n(o[l],a[l],c);return this.base_saturation=n(100,100,c)/100,this.base_value/=100},e.prototype.rotate=function(t){var e;return e=(this.hue+t)%360,this.set_hue(e)},e.prototype.get_saturation=function(t){var e,n;return n=this.saturation[t],e=n<0?-n*this.base_saturation:n,e>1&&(e=1),e<0&&(e=0),e},e.prototype.get_value=function(t){var e,n;return n=this.value[t],e=n<0?-n*this.base_value:n,e>1&&(e=1),e<0&&(e=0),e},e.prototype.set_variant=function(t,e,n){return this.saturation[t]=e,this.value[t]=n},e.prototype.set_variant_preset=function(t){var e,n,r;for(r=[],e=n=0;n<=3;e=++n)r.push(this.set_variant(e,t[2*e],t[2*e+1]));return r},e.prototype.get_hex=function(t,e){var n,r,o,a,i,u,s,h,l,c,f,p,_,m,d,v;for(l=Math.max.apply(Math,function(){var t,e,n,o;for(n=["red","green","blue"],o=[],e=0,t=n.length;e<t;e++)r=n[e],o.push(this["base_"+r]);return o}.call(this)),Math.min.apply(Math,function(){var t,e,n,o;for(n=["red","green","blue"],o=[],e=0,t=n.length;e<t;e++)r=n[e],o.push(this["base_"+r]);return o}.call(this)),v=255*(e<0?this.base_value:this.get_value(e)),m=e<0?this.base_saturation:this.get_saturation(e),i=l>0?v/l:0,p=[],f=["red","green","blue"],h=0,u=f.length;h<u;h++)r=f[h],_=Math.min.apply(Math,[255,Math.round(v-(v-this["base_"+r]*i)*m)]),p.push(_);for(t&&(p=function(){var t,e,r;for(r=[],e=0,t=p.length;e<t;e++)n=p[e],r.push(51*Math.round(n/51));return r}()),o="",c=0,s=p.length;c<s;c++)a=p[c],d=a.toString(16),d.length<2&&(d="0"+d),o+=d;return o},e}(),t}(),"undefined"!=typeof module&&null!==module&&null!=module.exports?module.exports=t:"function"==typeof define&&define.amd?define([],function(){return t}):window.ColorScheme=t}).call(this);




