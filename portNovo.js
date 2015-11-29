$(document).ready(function(){
	$('.botao-menu').click(function(){
        var img = $(this).data("img");
        $('div.container-design').hide();
        $('div.container-design[data-img="'+img+'"]').show();
        $('div.botao-menu').attr('data-onoff','off');
        $(this).attr('data-onoff','on');
      });

	$(".container-design img").click(function(){
        var src = $(this).attr('src');
        var width = $(this).css('width');
        var scale = $(this).attr('data-scale');
        $('#fundo').css({'display':'block'});
        $('#fundo img').attr('src',src).css({'width':scale,'z-index':'3'});
      });

	$("#fundo").click(function(){
        $('.contaier-design img').css({'-ms-transform':'none','-webkit-transform':'none','transform':'none','z-index':'2'});
        $(this).css({'display':'none'});  
      });

});