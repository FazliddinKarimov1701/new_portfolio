$(document).ready(function(){
	$('.navbar-toggler').click(function(){
		$('.collapse').slideToggle(900)
	});
	$('.down').click(function(){
		$('html , body').animate({ scrollTop : 660} , 1500)
	})
	let scroll = $(window).scrollTop;
	if( scroll === 686){
		$('#nav').css({boxShadow : '0 0 10 10px lightgrey', transition : '1.5s'});
	}else{
		$('.navbar').css({boxShadow : 'none' , transition : '1.5s'});
	}
})