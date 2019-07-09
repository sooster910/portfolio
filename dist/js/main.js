$(window).on('load', function() {
  $('.loader .inner').fadeOut(200, function() {
    $('.loader').fadeOut(100);
  });
});

//show resume pdf

function showDiv() {
  const resume = document.getElementById('resume');
  if (resume.style.display === 'none') {
    resume.style.display = 'block';
  } else {
    resume.style.display = 'none';
  }
}

//select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//set Initial State Of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle('close');
  menu.classList.toggle('show');
  menuBranding.classList.toggle('show');
  menuNav.classList.toggle('show');
  navItems.forEach(item => {
    item.classList.toggle('show');
  });
  showMenu = !showMenu;
}

//calculate getTotalLength of svg letter

// const logo = document.querySelectorAll("#logo path");

// console.log(logo);

// for (let i = 0; i < logo.length; i++) {
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }
