// test click avanti:

$(document).ready(function () {
  $('.next').click(
    function () {
      clickProssima();
    })
  );

  $('.prev').click(function () {
    clickPrecedente();
  })
})

function clickProssima() {
  var imgAttiva = $('img.active');
  var imgProssima = imgAttiva.next();
  var
  if (imgAttiva.hasClass('last') == true) {
    imgAttiva.removeClass('active');
    $('img.first').addClass('active');
  }
  else {
    imgAttiva.removeClass('active');
    imgProssima.addClass('active');
  }
}
