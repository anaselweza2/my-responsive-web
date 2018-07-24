$(document).ready(function(e) {
    "use strict"
  $(".my-work li").on("click",function(){
	  $(this).addClass("mine-color").siblings().removeClass("mine-color");
	  
	  });
	  
	  
	 $(".progress .progress-bar").each(function(index, element) {
		$(this).animate({
			width:$(this).attr("data-progress")+"%"},5000);
	});
	$(".hov1").click(function(){
			$(".news1").fadeIn(1000);
			$(".news2").css({"display":"none"});
			
			$(".news3").css({"display":"none"});
			
			
			
	});
	
	$(".hov2").click(function(){
			$(".news3").fadeIn(1000);
			$(".news1").css({"display":"none"});
			
			$(".news2").css({"display":"none"});
			
	});
	
	$(".hov3").click(function(){
			$(".news2").fadeIn(800);
			$(".news3").css({"display":"none"});
			
			$(".news1").css({"display":"none"});
			
	});

	  
	  /// navbar hover
	$(window).scroll(function(){
		

		
		if($(this).scrollTop()> 100){
			$(".my-navbar .navbar").css({"background-color":"#FFF"});
			$(".my-navbar .navbar-default .navbar-nav > li > a").css({"color":"inherit"});
			$(".my-navbar .navbar-default .navbar-nav > li > a").hover(function(){ $(this).css({"color":"#fcc121"})},function(){$(this).css({"color":"inherit"})});
         
				
		}else{
			$(".my-navbar .navbar").css({"background-color":"inherit"});
			$(".my-navbar .navbar-default .navbar-nav > li > a").css({"color":"#FFF"});
			$(".my-navbar .navbar-default .navbar-nav > li > a").hover(function(){ $(this).css({"color":"#fcc121"})},function(){$(this).css({"color":"#FFF"})});
			
		}
		$(".my-block").each(function() {
			if($(window).scrollTop()>$(this).offset().top-20){
				var blockId = $(this).attr("id");
				$(".navbar-collapse li a").removeClass("my-active");
				$(".navbar-collapse li a[data-scroll='"+blockId+"']" ).addClass("my-active");
				
				
			}
            
        });
		
		}); 
// scroll
$(".navbar-collapse li a").click(function(e){
	e.preventDefault();
	$(".navbar-collapse li a").removeClass("my-active");
	$("html,body").animate({
		scrollTop:$("#"+$(this).data("scroll")).offset().top},1000);
 });
 
 $(".navbar-collapse li a").click(function(){
		$(this).addClass("my-active").siblings().removeClass("my-active");
  });

});

