let vw;
let nav;
let menuBtn;

window.onload = function() {

  nav = document.querySelector('nav');
  menuBtn = document.querySelector('.hamburger');

  setClassOnResize();

  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  })
}

window.onresize = setClassOnResize;

function setClassOnResize(){
  vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  console.log(`vw: ${vw}`);

  if(vw <= 768){
    nav.classList.remove('lg-nav');
    nav.classList.add('mobile-nav');
  }else{
    nav.classList.remove('mobile-nav');
    nav.classList.add('lg-nav');
  }
}