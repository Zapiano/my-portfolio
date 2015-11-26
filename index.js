$(document).ready(function(){

      $('.botao-menu').click(function(){
        if (screen.availWidth > 992){
          var img = $(this).data("img");
          $('div.container-design').hide();
          $('div.container-design[data-img="'+img+'"]').show();
          $('div.botao-menu').attr('data-onoff','off');
          $(this).attr('data-onoff','on');
        }
      });

      $("img").click(function(){
        if (screen.availWidth>992){
          var src = $(this).attr('src');
          var width = $(this).css('width');
          var scale = $(this).attr('data-scale');
          $('#fundo').css({'display':'block'});
          $('#fundo img').attr('src',src).css({'width':width,'-ms-transform':'scale('+scale+')','-webkit-transform':' scale('+scale+')','transform':'scale('+scale+')','z-index':'3'});
        }
      });

      $("#fundo").click(function(){
        if (screen.availWidth > 992){
          $('img').css({'-ms-transform':'none','-webkit-transform':'none','transform':'none','z-index':'2'});
          $(this).css({'display':'none'});
        }  
      });
});
