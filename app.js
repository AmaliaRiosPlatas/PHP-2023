


$(document).ready(function(){
    $("a").click(function(){
      $(this).hide();
    });
  });


$(document).ready(function(){
    $(".boton").click(function(){
        $("p").html("<strong>Hiciste click en el botón!!!!</strong>");
    });
});

$(".boton2").click(function(){
    $("h3, h2, p").addClass("blue");
});

$(document).ready(function(){
    $(".boton3").click(function(){
      $("p").toggle();
    });
  });
