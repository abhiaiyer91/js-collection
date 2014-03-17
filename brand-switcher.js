(function(){
$(window).scroll(function () {
  if ($(document).scrollTop() == 0) {
    $('#brand img').attr('src', '../assets/img/barry_blue.png');
  } else {
    $('#brand img').attr('src', '../assets/img/barry_white.png');
  }
});


})();