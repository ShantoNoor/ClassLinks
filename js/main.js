new WOW().init();

window.addEventListener("resize", function(){
  let footerBtn = document.querySelector('.footer-btn');
  footerBtn.classList.toggle('btm-sm', window.innerWidth < 600);
});

window.addEventListener("scroll", function(){
  let navbar = document.querySelector('.navbar');
  navbar.classList.toggle('navbar-scrolling', window.scrollY > 0);
});

let snd = document.getElementById('sndt');
let sndwriter = new Typewriter(snd, {
  loop: true,
  delay: 75,
});
sndwriter
  .pauseFor(500)
  // .typeString('<i class="fas fa-book"></i> 2nd Semester')
  .typeString('Eid Mubarak <i class="fas fa-heart"></i>')
  .pauseFor(1000)
  // .deleteChars(13)
  // .typeString(' 2nd Semester')
  // .pauseFor(1000)
  .start();


let ost = document.getElementById('ostt');
let ostwriter = new Typewriter(ost, {
  loop: true,
  delay: 75,
});
ostwriter
  .pauseFor(600)
  // .typeString('<i class="fas fa-book"></i> 1st Semester')
  .typeString('Eid Mubarak <i class="fas fa-heart"></i>')
  .pauseFor(1000)
  // .deleteChars(13)
  // .typeString(' 1st Semester')
  // .pauseFor(1000)
  .start();


let ar = document.getElementById('art');
let arwriter = new Typewriter(ar, {
  loop: true,
  delay: 75,
});
arwriter
  .pauseFor(700)
  // .typeString('<i class="fas fa-plus-circle"></i> Additional Resources')
  .typeString('Eid Mubarak <i class="fas fa-heart"></i>')
  .pauseFor(1000)
  // .deleteChars(21)
  // .typeString(' Additional Resources')
  // .pauseFor(1000)
  .start();
