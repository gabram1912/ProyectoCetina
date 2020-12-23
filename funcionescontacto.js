$(document).ready(function(){
  $(function () {
    // Slideshow 3
    $("#slider3").responsiveSlides({
      manualControls: '#slider3-pager',
      maxwidth: 800
    });
  });
  //Oculta y ensenia los Tabs
  $('#btn1').addClass('active');
  $('#barra1').addClass('barraNaranja2');
    $('#contenedorTabs p').hide();
    $('#op1').show();
    //Al dar click
    $('.link2').click(function() {
      var prueba = $(this).children(0);
      $('.link').removeClass('active');
      $('.barra').removeClass('barraNaranja2');
      $(prueba[1]).addClass('barraNaranja2');
      console.log($(prueba[1]));
      $(prueba[0]).addClass('active');
      $('#contenedorTabs p').hide();

      var activarTab = $(prueba[0]).attr('href');
      $(activarTab).show();
    });
});