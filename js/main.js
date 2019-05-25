// $(window).on("load", function() {
//   $(".loader .inner").fadeOut(500, function() {
//     $(".loader").fadeOut(750);
//   });
// });

$(document).ready(function() {
  $(".landing__border").css("visibility", "visible");

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  var skillsTopOffset = $(".skills").offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#eece1a",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 140,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }
  });
});

//show resume pdf

function showDiv() {
  const resume = document.getElementById("resume");
  if (resume.style.display === "none") {
    resume.style.display = "block";
  } else {
    resume.style.display = "none";
  }
}

//select DOM Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//set Initial State Of menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle("close");
  menu.classList.toggle("show");
  menuBranding.classList.toggle("show");
  menuNav.classList.toggle("show");
  navItems.forEach(item => {
    item.classList.toggle("show");
  });
  showMenu = !showMenu;
}

//calculate getTotalLength of svg letter

const logo = document.querySelectorAll("#logo path");

console.log(logo);

for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
