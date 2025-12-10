// Burger menu 

  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Closes the menu when clicking on a link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });


// Bookshelf animation
const items = document.querySelectorAll('.accordion-item');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

items.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.getAttribute('data-img');
    overlayImg.src = imgSrc;
    overlay.style.display = 'flex';
  });
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayImg.src = '';
});


// GSAP Animations
// Photo animation
gsap.from(".about-photo", {
  scrollTrigger: {
    trigger: ".about-photo",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  scale: 0.8,
  duration: 1.2,
  ease: "power2.out"
});

// Animate each paragraph with a delay
gsap.utils.toArray(".about-text p").forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: i * 0.2,
    ease: "power2.out"
  });
});

// Scroll
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});


// =====

// Certificate opening animation
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".accordion-item");
  const overlay = document.getElementById("overlay");
  const overlayImg = document.getElementById("overlay-img");

  items.forEach(item => {
    item.addEventListener("click", () => {
      const imgSrc = item.getAttribute("data-img");
      if (imgSrc) {
        overlayImg.src = imgSrc;
        overlay.style.display = "flex";
      }
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlayImg.src = "";
  });
});


// ----------
// Animation for cards
document.addEventListener("DOMContentLoaded", () => {
  const options = {
    threshold: 0.2 
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, options);

  document.querySelectorAll(".skills-list li, .accordion-item").forEach(el => {
    observer.observe(el);
  });
});


// -----------
// Animation for Sections skills
document.addEventListener("DOMContentLoaded", () => {
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, options);

  document.querySelectorAll("h2, h3").forEach(el => {
    observer.observe(el);
  });
});


// ------------
// All h2 come from below
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("h2").forEach(title => {
  gsap.from(title, {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: title,
      start: "top 80%", 
      toggleActions: "play none none none"
    }
  });
});
