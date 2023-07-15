// Navigation bar functionality
  document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.header .navbar');
    const menuButton = document.querySelector('#menu-btn');
    const closeButton = document.querySelector('#nav-close');
  
    menuButton.addEventListener('click', function() {
      navbar.classList.toggle('active');
    });
  
    closeButton.addEventListener('click', function() {
      navbar.classList.remove('active');
    });
  
  
    const searchform = document.querySelector('.search-form');
    const searchButton = document.querySelector('#search-btn');
    const closesearch = document.querySelector('#close-search');
  
    searchButton.addEventListener('click', function() {
      searchform.classList.toggle('active');
    });
  
    closesearch.addEventListener('click', function() {
      searchform.classList.remove('active');
    });
  
    window.addEventListener('scroll', function() {
      navbar.classList.remove('active');
    });
  
  });
  
// Swiper slide functionality
  var swiper = new Swiper(".home-slider", {
    loop:true,
    grabcursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
// About section functionality
  document.addEventListener('DOMContentLoaded', function() {
    const readMoreButton = document.querySelector('.read-more');
    const additionalText = document.querySelector('.additional-text');
  
    readMoreButton.addEventListener('click', function() {
      event.preventDefault();
      additionalText.classList.toggle('show');
      readMoreButton.textContent = additionalText.classList.contains('show') ? 'Read Less' : 'Read More';
    });
  
  });
  
  
// Background audio functionality
  function playAudio(id) {
    var audio = document.getElementById(id);
    audio.play();
  }
  
  function pauseAudio(id) {
    var audio = document.getElementById(id);
    audio.pause();
  }
  
  
  
  