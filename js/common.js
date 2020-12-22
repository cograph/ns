$(document).ready(function(){
	/*Rollover----------------------*/
  function smartRollover() {
  	if(document.getElementsByTagName) {
  		var images = document.getElementsByTagName("img");
  		for(var i=0; i < images.length; i++) {
  			if(images[i].getAttribute("src").match("_off."))
  			{
  				images[i].onmouseover = function() {
  					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
  				}
  				images[i].onmouseout = function() {
  					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
  				}
  			}
  		}
  	}
  }
  if(window.addEventListener) {
  	window.addEventListener("load", smartRollover, false);
  }
  else if(window.attachEvent) {
  	window.attachEvent("onload", smartRollover);
  }
	/*--------------------------------------------*/
});	

/* ---------- colorbox ---------- */
$(document).ready(function(){
  $("a.colorbox").colorbox({maxWidth:'90%',maxHeight:'90%',speed:'200'});	
  $("a.iframe").colorbox({iframe:true, width:"90%", height:"90%"});
 });

/*mouse over----------------------*/
$(".over").fadeTo(1,1.0).hover( 
  function(){
    $(this).fadeTo(200, 0.7);
  },
  function(){
    $(this).fadeTo(200, 1.0);
  }
);
/*--------------------------------------------*/

/*img switch----------------------*/
$(function(){
  var $setElem = $('.switch'),
  pcName = '_pc',
  spName = '_sp',
  replaceWidth = 641;

  $setElem.each(function(){
    var $this = $(this);
    function imgSize(){
      if(window.innerWidth > replaceWidth) {
        $this.attr('src',$this.attr('src').replace(spName,pcName)).css({visibility:'visible'});
      } else {
        $this.attr('src',$this.attr('src').replace(pcName,spName)).css({visibility:'visible'});
      }
    }
    $(window).resize(function(){imgSize();});
    imgSize();
  });
});
/*--------------------------------------------*/

/*scrollsmoothly----------------------*/
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
/*--------------------------------------------*/

(function($) {
	// 読み込んだら開始
	$(function() {
		// アコーディオン
		var accordion = $(".accordion");
		accordion.each(function () {
			var noTargetAccordion = $(this).siblings(accordion);
			$(this).find(".acswitch").click(function() {
			$(this).next(".contentWrap").slideToggle();
			$(this).toggleClass("open");
			noTargetAccordion.find(".contentWrap").slideUp();
			noTargetAccordion.find(".acswitch").removeClass("open");
			});
		});
	});
})(jQuery);
