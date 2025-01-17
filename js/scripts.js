include("js/jquery.color.js");
include("js/jquery.backgroundpos.js");
include("js/jquery.easing.js");
include("js/jquery.fancybox-1.3.4.pack.js");
include("js/googleMap.js");
include("js/superfish.js");
include("js/switcher.js");
include("js/bgStretch.js");
include("js/sImg.js");
include("js/MathUtils.js");
include("js/forms.js");


function include(url) {
    document.write('<script src="' + url + '"></script>');
}
var MSIE = false,
    content, defColor, mh = 0, h = 0, defMh = 0;

function addAllListeners() {

}

$(document).ready(ON_READY);
$(window).load(ON_LOAD);

function ON_READY() {
    
//----------------fancybox-----------------*/   
	$('.list1>li>figure> a').attr('rel','appendix')
    .prepend('<span class="sitem_over"><strong></strong></span>')
    $('.list1>li>figure> a').fancybox({
        'transitionIn': 'elastic',
    	'transitionOut': 'elastic',
    	'speedIn': 500,
    	'speedOut': 300,
        'centerOnScroll': true,
        'overlayColor': '#000'
    });
	$('.list2>li>figure> a').attr('rel','appendix')
    .prepend('<span class="sitem_over2"><strong></strong></span>')
    $('.list2>li>figure> a').fancybox({
        'transitionIn': 'elastic',
    	'transitionOut': 'elastic',
    	'speedIn': 500,
    	'speedOut': 300,
        'centerOnScroll': true,
        'overlayColor': '#000'
    });
    
	$('.list1 > li > figure > a')
    .find('strong').css('top','-200px').end()
    .hover(
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').css({display:'block','opacity':'0'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':0}).stop().animate({'opacity':1,'top':'0'},240,'easeOutCubic');
            } else { 
                $(this).children('.sitem_over').css({display:'block','opacity':'1'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':1}).stop().animate({'opacity':1,'top':'0'},240,'easeOutCubic');
            }
        },
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').stop().animate({'opacity':0},700,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':0,'top':'200px'},400,'easeInQuad').delay().animate({'top':'-200'},0);  
            } else {
                $(this).children('.sitem_over').stop().animate({'opacity':1},700,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':1,'top':'200px'},400,'easeInQuad').delay().animate({'top':'-200'},0);  
            }            
        }
    );    
    
	$('.list2 > li > figure > a')
    .find('strong').css('top','-200px').end()
    .hover(
        function(){
            if (!MSIE){
                $(this).children('.sitem_over2').css({display:'block','opacity':'0'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':0}).stop().animate({'opacity':1,'top':'0'},240,'easeOutCubic');
            } else { 
                $(this).children('.sitem_over2').css({display:'block','opacity':'1'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':1}).stop().animate({'opacity':1,'top':'0'},240,'easeOutCubic');
            }
        },
        function(){
            if (!MSIE){
                $(this).children('.sitem_over2').stop().animate({'opacity':0},700,'easeOutQuad',function(){$(this).children('.sitem_over2').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':0,'top':'200px'},400,'easeInQuad').delay().animate({'top':'-200'},0);  
            } else {
                $(this).children('.sitem_over2').stop().animate({'opacity':1},700,'easeOutQuad',function(){$(this).children('.sitem_over2').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':1,'top':'200px'},400,'easeInQuad').delay().animate({'top':'-200'},0);  
            }            
        }
    );
    
/**********************SUPERFISH MENU**************************/   
    $('.menu #menu').superfish({
	   delay:400,
	   animation: {
	       opacity: 'show'
	   },
       speed: 'fast',
       autoArrows: false,
       dropShadows: false
    });
    
//start anomation-------------------------------------------------------------------------------------------------
        $('header').css({top:-150})
        $('footer').css({bottom:-180})   	
    	$('header').stop().delay(250).animate({top:0}, 650, 'easeOutExpo')
    	$('footer').stop().delay(300).animate({bottom:0}, 650, 'easeOutExpo')   
 	    $('h1').stop().animate({marginTop: 0}, 550, "easeOutExpo")    
}

function ON_LOAD(){
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    $('.spinner').fadeOut();
            
    mh = parseInt($('body').css('minHeight'));
    defMh = mh;    
//Forms--------------------------------------------------------------------------------------------------------
 	   $('#form1').forms({
 	     ownerEmail:'#'
 	     })
        
//follow icons---------------------------------------------------------
        $('#follow-icon .img_act').css({opacity:0})
    	
    	$('#follow-icon a').hover(function(){
    		$(this).find('.img_act').stop().animate({opacity:1})						 
    	}, function(){
    		$(this).find('.img_act').stop().animate({opacity:0}) 					 
    	})
//contactText_2---------------------------------------------------------
    	
    	$('.contactText_2, footer p a').hover(function(){
    		$(this).stop().animate({color:"#face46"},250)							 
    	}, function(){ 	
    		$(this).stop().animate({color:"#1d1d1d"},250)					 
    	})
//link2---------------------------------------------------------
    	
    	$('.link2').hover(function(){
    		$(this).stop().animate({color:"#face46"},250)							 
    	}, function(){ 	
    		$(this).stop().animate({color:"#908b74"},250)					 
    	})
        
        
//h4 > a.link3---------------------------------------------------------
    	
    	$('h4 > a.link3').hover(function(){
    		$(this).stop().animate({color:"#face46"},250)							 
    	}, function(){ 	
    		$(this).stop().animate({color:"#1d1d1d"},250)					 
    	})
//contactText_3---------------------------------------------------------
    	
    	$('.contactText_3').hover(function(){
    		$(this).stop().animate({color:"#face46"},250)							 
    	}, function(){ 	
    		$(this).stop().animate({color:"#1d1d1d"},250)					 
    	})
        
//footer p a---------------------------------------------------------
    	
    	$('footer p a').hover(function(){
    		$(this).stop().animate({color:"#face46"},250)							 
    	}, function(){ 	
    		$(this).stop().animate({color:"#979488"},250)					 
    	})        
        
//logobig---------------------------------------------------------

        var logoBig = false;

    	$('.logobig').click(function(){
    		$('.menu').stop().animate({top:274},550, 'easeOutExpo')	
    		$(this).stop().animate({top:-189},550, 'easeOutExpo')
            logoBig = true;		
            					 
    	})
        	

//content switch-----------------------------------------------------------------------------------------------------------------------------------
    content = $('#content');
    content.tabs({
        show:0,
        preFu:function(_){
            _.li.css({'display':'none'});		
        },
        actFu:function(_){          
            if(_.curr){
                
                h = parseInt( _.curr.outerHeight());
                content.children('ul').css({'height':h});
                
                if (_.n == 0){
                   
                   $('.submenu_1').css({top: 2500, visibility:'hidden'});
                   
                        if (logoBig == true) {
                            $('#menu > li > a > em').stop().delay(250).animate({height:209, width: 240, top: -203, left: 0},250);                   
                     		$('.menu').stop().delay(250).animate({top:274},550, 'easeOutExpo');
                     		$('h1').stop().animate({left:1900},550, 'easeInExpo').delay(0).animate({left:-2000},0);
                    		$('.logobig').stop().delay(350).animate({top:-189},550, 'easeOutExpo');
                        }else{                 
                        }  					 
                        
                    setTimeout(function (){
                        $(window).trigger('resize');
                    },900);
                                       
                } else {
                    
                    $('#menu > li > a > em').stop().delay(200).animate({height:0, width: 0, top: 20, left: 120},250)	
             		$('.menu').stop().delay(100).animate({top:-75},550, 'easeOutExpo')	
             		$('h1').stop().delay(250).animate({left:0},550, 'easeOutExpo')	
            		$('.logobig').stop().animate({top:-189},550, 'easeOutExpo')                    
                                        
                  
                    setTimeout(function (){
                        $('.submenu_1').css({top: 65, visibility:'visible'});
                    },900)    
                    
                    logoBig = true;                                  
                    $(window).trigger('resize');
                }     
                _.curr
                
                    .css({'left':'-2000px','display':'block'}).stop(true).delay(200).show().animate({'left':'0px'},{duration:700,easing:'easeOutExpo'});
            }   
    		if(_.prev){
  		        _.prev
                    .show().stop(true).animate({'left':'2000px'},{duration:600,easing:'easeInOutExpo',complete:function(){
                            if (_.prev){
                                _.prev.css({'display':'none'});
                            }
                        }
		              });
            }      
                  
  		}
    });
    defColor = $('#menu>li>a').eq(0).css('color'); 
    var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/page_splash',
        hoverIn:function(li){
                $('>a ', li).stop().animate({'paddingBottom':'24px'},450,'easeOutExpo');
                $('>a strong', li).stop().animate({left:'15px', color:'#cf9700'},450,'easeOutExpo');
                $('>a span', li).stop().animate({right:'25px', color:'#cf9700'},450,'easeOutExpo');
                $('>a img', li).stop().animate({'opacity': '1'},350);
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                   $('>a ', li).stop().animate({'paddingBottom':'16px'},350,'easeOutExpo');
                   $('>a strong', li).stop().animate({color:'#1d1d1d', left:'0px'},450,'easeOutExpo');
                   $('>a span', li).stop().animate({right:'3px', color:'#b7993a'},450,'easeOutExpo');
                   $('>a img', li).stop().animate({'opacity':'0.6'},350);
            }else{
                   $('>a ', li).stop().animate({'paddingBottom':'16px'},350,'easeOutExpo');
                   $('>a strong', li).stop().animate({color:'#1d1d1d', left:'0px'},450,'easeOutExpo'); 
                   $('>a span', li).stop().animate({right:'3px', color:'#b7993a'},450,'easeOutExpo');
                   $('>a img', li).stop().animate({'opacity': '0.6'},350);          
            }
        }
    })
    .navs(function(n){	
   	    $('#content').tabs(n);
   	});
    
    setTimeout(function(){
        $('#bgStretch').bgStretch({
    	   align:'leftBottom',
           autoplay: false,
           navs:$('.pagin').navs({})
        })
        .sImg({
            sleep: 1000,
            spinner:$('<div class="spinner spinner_bg"></div>').css({opacity:.5}).stop().hide(3000)
        });
    },0);
    
    setTimeout(function(){  $('body').css({'overflow':'visible'}); },300);    
    addAllListeners();
    
    $(window).trigger('resize');
}

$(window).resize(function (){
    if (content) {
        var newMinH = h + 550;
        if (defMh > newMinH) {
            newMinH = defMh;
        }
        $('body').stop().animate({'minHeight':newMinH},960)
    }
}); 