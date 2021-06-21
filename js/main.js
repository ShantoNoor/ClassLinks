new WOW().init();

window.addEventListener("resize", function(){
  let footerBtn = document.querySelector('.footer-btn');
  footerBtn.classList.toggle('btm-sm', window.innerWidth < 600);
});

window.addEventListener("scroll", function(){
  let navbar = document.querySelector('.navbar');
  navbar.classList.toggle('navbar-scrolling', window.scrollY > 125);
});
