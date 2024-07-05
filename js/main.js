// // scroll element

// const scrollRevealOption = {
//   distance: "50px",
//   origin: "bottom",
//   duration: 1000,
// };

// // home
// ScrollReveal().reveal(".header h1", scrollRevealOption);
// ScrollReveal().reveal(".header p", { ...scrollRevealOption, delay: 500 });
// ScrollReveal().reveal(".header main", { ...scrollRevealOption, delay: 1000 });

// ScrollReveal().reveal(".explore__grid .explore__card", {
//   ...scrollRevealOption,
//   interval: 500,
//   easing: "ease-in",
//   delay: 500,
// });

// // home

// // product

// ScrollReveal().reveal(".product h2", scrollRevealOption);
// ScrollReveal().reveal(".product h3", { ...scrollRevealOption, delay: 500 });
// ScrollReveal().reveal(".product article", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".product .btn", {
//   ...scrollRevealOption,
//   delay: 1500,
// });
// // product

// // about

// ScrollReveal().reveal(".about__container .abouth2", scrollRevealOption);
// ScrollReveal().reveal(".about__container h3", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".about__container .p1", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".about__container .slick-carousel", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".about__container .p2", {
//   ...scrollRevealOption,
//   delay: 1500,
// });
// ScrollReveal().reveal(".about__container .p3", {
//   ...scrollRevealOption,
//   delay: 2000,
// });
// ScrollReveal().reveal(".about__container #about2h2", {
//   ...scrollRevealOption,
//   delay: 2500,
// });
// // about

// // testimonal

// ScrollReveal().reveal(".testimonal .hh2", scrollRevealOption);
// ScrollReveal().reveal(".testimonal h3", { ...scrollRevealOption, delay: 500 });
// ScrollReveal().reveal(".testimonal .cody", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// // testimonal

// // contact
// ScrollReveal().reveal(".contact__container h2", scrollRevealOption);
// ScrollReveal().reveal(".contact__container h3", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".contact__container p", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".contact__container .thecenterer", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".contact__container form", {
//   ...scrollRevealOption,
//   delay: 1500,
// });
// // contact

// // gallery
// ScrollReveal().reveal(".gallary h2", scrollRevealOption);
// ScrollReveal().reveal(".gallary h3", { ...scrollRevealOption, delay: 500 });
// ScrollReveal().reveal(".gallary .the-card", {
//   ...scrollRevealOption,
//   interval: 500,
//   easing: "ease-in",
// });

// // gallery

// // about page
// ScrollReveal().reveal(".aboutpage h2", scrollRevealOption);
// ScrollReveal().reveal(".aboutpage h3", { ...scrollRevealOption, delay: 500 });
// ScrollReveal().reveal(".aboutpage .about_page_p", {
//   ...scrollRevealOption,
//   delay: 1000,
//   interval: 500,
// });
// ScrollReveal().reveal(".about_page #about_page_h2", scrollRevealOption);
// ScrollReveal().reveal(".about_page h3", { ...scrollRevealOption, delay: 500 });
// ScrollReveal().reveal(".about_page .faq", {
//   ...scrollRevealOption,
//   delay: 1000,
//   interval: 500,
// });
// // about page

// scroll element
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 500, // Default delay for sequential reveal
};

let revealDelay = 0;

// Function to reveal elements in sequence
function revealInSequence(selector) {
  document.querySelectorAll(selector).forEach((el, index) => {
    ScrollReveal().reveal(el, {
      ...scrollRevealOption,
      delay: revealDelay + index * 500, // Adjust delay for each element
    });
  });
}

// home
revealInSequence(".header h1");
revealInSequence(".header p");
revealInSequence(".header main");

revealInSequence(".explore__grid .explore__card");

// product
revealInSequence(".product h2");
revealInSequence(".product h3");
revealInSequence(".product article");
revealInSequence(".product .btn");

// about
revealInSequence(".about__container .abouth2");
revealInSequence(".about__container h3");
revealInSequence(".about__container .p1");
revealInSequence(".about__container .slick-carousel");
revealInSequence(".about__container .p2");
revealInSequence(".about__container .p3");
revealInSequence(".about__container #about2h2");

// testimonial
revealInSequence(".testimonal .hh2");
revealInSequence(".testimonal h3");
revealInSequence(".testimonal .cody");

// contact
revealInSequence(".contact__container h2");
revealInSequence(".contact__container h3");
revealInSequence(".contact__container p");
revealInSequence(".contact__container .thecenterer");
revealInSequence(".contact__container form");

// gallery
revealInSequence(".gallary h2");
revealInSequence(".gallary h3");
revealInSequence(".gallary .the-card");

// about page
revealInSequence(".aboutpage h2");
revealInSequence(".aboutpage h3");
revealInSequence(".aboutpage .about_page_p");
revealInSequence(".about_page #about_page_h2");
revealInSequence(".about_page h3");
revealInSequence(".about_page .faq");

// scroll image

$(".slick-carousel").slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 3,
  slidesToScroll: 0,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: "linear",
  infinite: true,
  arrows: false,
  touchMove: true,
  swipeToSlide: true,
  swipe: true,
});

// scroll image

// faq

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("active");
      }
    });
    faq.classList.toggle("active");
  });
});

// faq

// hamburger

var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

// hamburger

// text animation

const texts = [
  "Dream Outfit",
  "Perfect Look",
  "Signature Style",
  "Unique Fashion",
  "Personalized Attire",
  "Ideal Outfit",
];
let index = 0;
const changeTextElement = document.getElementById("changing-text");

function changeText() {
  changeTextElement.classList.add("hidden");
  setTimeout(() => {
    index = (index + 1) % texts.length;
    changeTextElement.textContent = texts[index];
    changeTextElement.classList.remove("hidden");
  }, 1000);
}

setInterval(changeText, 3000);

// text animation

// button click

function redirectToGallery() {
  window.location.href = "pages/gallery.html";
}
function redirectToAbout() {
  window.location.href = "pages/about.html";
}

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const instaLink = card.getAttribute("data-insta");
    if (instaLink) {
      window.open(instaLink, "_blank");
    }
  });
});

// button click

// number counting

function animateNumber(element, target) {
  let start = 0;
  let end = parseInt(target);
  let duration = 2000;
  let interval = 30;
  let step = (end - start) / (duration / interval);

  function updateNumber() {
    start += step;
    if (start < end) {
      element.textContent = Math.floor(start) + "+";
    } else {
      element.textContent = end + "+";
      clearInterval(animationInterval);
    }
  }

  let animationInterval = setInterval(updateNumber, interval);
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const counters = document.querySelectorAll(".explore__card_h2");
  counters.forEach((counter) => {
    if (isInViewport(counter) && !counter.classList.contains("counted")) {
      animateNumber(counter, counter.getAttribute("data-target"));
      counter.classList.add("counted");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

// number counting

// date

document.getElementById("current-year").textContent = new Date().getFullYear();

// date

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.open(
    "POST",
    " https://script.google.com/macros/s/AKfycby4C1cKdRP0je0k95XKkOW0ye5-mnCGZnxIWH6Q-f821Mhh3g3YdyB7nrsyyGneU7Fp/exec"
  );
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 && xhr.responseText === "Success") {
        form.reset();
        window.location.href = "pages/thankyou.html";
      } else {
        alert("Submission blocked or an error occurred.");
      }
    }
  };

  xhr.send(formData);
}
