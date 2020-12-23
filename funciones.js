$(".submenu").click(function () {
  $(this).children("ul").slideToggle();
})

$("ul").click(function (ev) {
  ev.stopPropagation();
})

var slideIndex = 0;
showSlides();


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 5000); // Change image every 2 seconds

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("agendacita");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$(".acordeon_titulo").click(function () {
  var elemento = $(this);
  var seleccion = elemento.find("i");
  var seleccion2 = seleccion.attr("class");
  var seleccion3 = elemento.find("h2");
  var otroelemento = elemento.next();
  otroelemento.slideToggle();
  seleccion3.toggleClass("color");
  if (seleccion2 == "fas fa-plus fa-2x") {
    seleccion.removeClass("fas fa-plus fa-2x");
    seleccion.addClass("fas fa-minus fa-2x");
  } else {
    seleccion.removeClass("fas fa-minus fa-2x");
    seleccion.addClass("fas fa-plus fa-2x");
  }
});



$(document).ready(function () {
  

  $("#flecha").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0px",
      },
      1000
    );
  });
});

function myFunction() {
  var x = document.getElementById("modal");

  x.style.display = "none";

}
