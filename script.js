/* menu icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* scroll sections active link 1:11:44*/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute ('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  }) 

/*sticky navbar 35:31*/
let header = document.querySelector('header')
header.classList.toggle('sticky', window.scrollY > 100);
};
  /*remove menu icon navbar when click navbar link (scroll)*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');


/*======= swiper ======= 57:47*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*dark light mode ====1:39:25*/ 
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

/*scroll reveal 1:42:23*/
 const sr = ScrollReveal();
 sr.reveal('.home-content, .heading', {
  duration: 2000,
  origin: 'top',
  distance: '80px',
  Delay: 500,
});

sr.reveal('.home-img img, .services, .portfolio-box, .testimonial-wrapper, .contact form',{
  duration: 2000,
  origin: 'bottom',
  distance: '80px',
  Delay: 500,
})

sr.reveal('.home-content h1, .about-img img',{
  duration: 2000,
  origin: 'left',
  distance: '80px',
  Delay: 500,
})

sr.reveal('.home-content h3, .home-content p, .about-content',{
  duration: 2000,
  origin: 'right',
  distance: '80px',
  Delay: 500,
})




// ScrollReveal({
//   reset:true,
//   distance: '80px',
//   duration: 2000,
//   delay:200 
// })

//scrollReveal().reveal('.home-content, .heading', {origin: 'top'});

// ScrollReveal().reveal('.home-img img, .services, .porfolio-box, .testimonal-wrapper, .contact form',{ origin: 'bottom'});

// ScrollReveal().reveal ('.home-content h1, .about-img img', {origin: 'left'});
// ScrollReveal().reveal ('.home-content h3, .home-content p, .about-content', {origin: 'right'});