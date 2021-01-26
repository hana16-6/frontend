$(function () {
$('.header .navbar .fa-bars').click(function() {
$(".header .navbar ul").slideToggle(100);
$(this).toggleClass('fa-times');
if($(".header .navbar ul").hasClass('list')){
    $(".header .navbar .immersive").css("marginTop","90px")

}
});
});