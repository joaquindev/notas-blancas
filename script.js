$(document).ready(function(){
  $('body').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function(){
    $('body').removeClass('fadeInDown');
    $('body').addClass('animated fadeOutDown');
  });
});
