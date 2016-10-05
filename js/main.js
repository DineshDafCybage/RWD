  'use strict';

  // Call init function on window onload.
  window.onload = init;

  // Global variable which are used multiple times in this code.
  var slideIndex = 1;

  function init() {
    window.onresize = function () {
      showSlides(slideIndex);
    };
    // Set Current Year
    document.getElementById('current-year').innerHTML = new Date().getFullYear();

    // Toggle mobile nav menu on click
    var mobMenu = document.getElementsByClassName('open-menu');
    mobMenu[0].addEventListener('click', toggleMenu);

    // Opens Google Map onclick of view-map button.
    var viewMapBtn = document.getElementById('view-map');
    viewMapBtn.addEventListener('click', viewMap);

    // Carousel Function
    showSlides(slideIndex);
  }


  /*
   ** Toggle navigation menu for small screen devices. 
   */

  function toggleMenu() {
    var mainNav = document.getElementById('main-nav');
    if (this.className === 'close-menu') {
      hideElement(mainNav);
      this.className = 'open-menu';
    } else {
      showElement(mainNav);
      this.className = 'close-menu';
    }
  }


  /*
   ** Activate next or previous slide as per the param value.
   ** @param activeSlide: activate next slide if 1 and previous if -1
   */
  function slideShow(activeSlide) {
    showSlides(slideIndex += activeSlide);
  }


  /*
   ** Show active slide and hide others.
   ** @param activeSlide: current active slide.
   */
  function showSlides(activeSlide) {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if (width > 767) {
      var slides = document.getElementById('desktop-slider').getElementsByClassName('carousel-slides');
    } else {
      var slides = document.getElementById('mobile-slider').getElementsByClassName('carousel-slides');
    }

    var slideLen = slides.length;
    if (activeSlide > slideLen) {
      slideIndex = 1;
    }
    if (activeSlide < 1) {
      slideIndex = slideLen;
    }
    for (var i = 0; i < slideLen; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
  }


  /*
   ** Used to view location of the company on google maps. 
   */
  function viewMap() {
    window.open('https://www.google.co.in/maps/place/Name+street/@40.6357241,-73.9943294,17z', '_blank');
  }


  /*
   ** Hide the element. 
   ** @param: el - DOM element. 
   */
  function hideElement(el) {
    if (el.classList.contains('show')) {
      el.classList.remove('show');
      el.classList.add('hide');
    }
  }


  /*
   ** Show the element. 
   ** @param: el - DOM element. 
   */
  function showElement(el) {
    if (el.classList.contains('hide')) {
      el.classList.remove('hide');
      el.classList.add('show');
    }
  }
