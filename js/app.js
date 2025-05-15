$(document).ready(function(){

//*JS run here*/
$('.bannerSlider').slick({
prevArrow: "#bannerLeftArrow",
nextArrow: "#bannerRightArrow",
dots: true,
dotsClass: 'slider-dots',
autoplay: true,
autoplaySpeed: 1500,});


//third slider
$('.customerSlider').slick({
  prevArrow: "#BannerLeftArrow",
  nextArrow: "#BannerRightArrow",
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 1500,

  responsive: [
    {
  breakpoint: 767,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1,
  }}]
});


//*second slider*/

  $('.catalogSlider').slick({
    prevArrow: "#bannerLeftArrows",
    nextArrow: "#bannerRightArrows",
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
    breakpoint: 767,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    }}]
    
  });


//*text animation*/

  new TypeIt("#myElement", {
    strings: "Welcome to shopery",
  }).go();

  new TypeIt("#myElement2", {
    strings: "Welcome to shopery",
  }).go();


  new TypeIt("#myElement3", {
    strings: "Welcome to shopery",
  }).go();

})
//search bar appear

$('.searchIcons').click(function(){
  $('.searchBox').addClass('active')
})


$(window).on("keydown", function(event) {

  if (event.key === "Escape"){
    $('.searchBox').removeClass('active')
  }
})

$('.closeSearch').click(function(){
  $('.searchBox').removeClass('active')
})

$('.userScroll').counterUp({
    delay: 10,
    time: 1000,
    
});

//singel product  js/
$('.productThumbSlider').slick({
  slidesToShow: 4,
  verticalSwiping: true,
  vertical: true,
  arrows: false,
   asNavFor: '.productGallerySlider',
   focusOnSelect: true,
   responsive: [{
   breakpoint: 767,
      settings: {
        slidesToShow: 4,
       adaptiveHeight: false,
      vertical: false,
      }
      }]
})

$('.productGallerySlider').slick({
  slidesToShow: 1,
  arrows: false,
  asNavFor: '.productThumbSlider',
  responsive: [
    {

  breakpoint: 767,
      settings: {
        slidesToShow: 1,
       adaptiveHeight: false,
       arrows: false,
      }
      }
    ]
}) 


$('.plusbtn').click(function() {
    let input = $(this).siblings('.quantity');
    let current = parseInt(input.val()) || 1;
    input.val(current + 1);
  });


  $('.minusbtn').click(function() {
    let input = $(this).siblings('.quantity');
    let current = parseInt(input.val()) || 1;
    if (current > 1) {
      input.val(current - 1);
    }
  });


   $('.quantity').on('input', function() {
    let val = parseInt($(this).val());
    if (isNaN(val) || val < 1) {
      $(this).val(1);
    }
  });







