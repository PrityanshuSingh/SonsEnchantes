/*JS code of home page compiled up together, each different section
is used separately for different files for better understanding of 
code and its functionality

Note : the link of this file is not being used anywhere, it can be 
       used later when the project will become more complex and big.*/


//import React, { useEffect, useRef, useState } from 'react';      
/*
NAVIGATION BAR FUNCTIONALITY
useEffect(() => {

  //menu button
  const menuButton = document.querySelector('#menu-btn');
  const closeButton = document.querySelector('#nav-close');

  //search button
  const searchButton = document.querySelector('#search-btn');
  const closesearch = document.querySelector('#close-search');

  //defining functions for menu button
  const handleMenuButtonClick = () => {
  const navbar = document.querySelector('.header .navbar');
  navbar.classList.toggle('active');
  };

  const handleCloseButtonClick = () => {
  const navbar = document.querySelector('.header .navbar');
  navbar.classList.remove('active');
  };

  const handleWindowScroll = () => {
  const navbar = document.querySelector('.header .navbar');
  navbar.classList.remove('active');
  };

  //defining functions for search button
  const handleSearchButtonClick = () => {
  const searchform = document.querySelector('.search-form');
  searchform.classList.toggle('active');
  };

  const handleCloseSearchClick = () => {
  const searchform = document.querySelector('.search-form');
  searchform.classList.remove('active');
  };

  //Adding eventlisteners for menu button
  menuButton.addEventListener('click', handleMenuButtonClick);
  closeButton.addEventListener('click', handleCloseButtonClick);
  window.addEventListener('scroll', handleWindowScroll);

  //Adding eventlisteners for search button
  searchButton.addEventListener('click', handleSearchButtonClick);
  closesearch.addEventListener('click', handleCloseSearchClick);

  // Cleanup event listeners for menu and search button
  return () => {
  menuButton.removeEventListener('click', handleMenuButtonClick);
  closeButton.removeEventListener('click', handleCloseButtonClick);
  window.removeEventListener('scroll', handleWindowScroll);

  searchButton.removeEventListener('click', handleSearchButtonClick);
  closesearch.removeEventListener('click', handleCloseSearchClick);  
  };
  
}, []);

//Audio hover
const audioRefs = {
  intro: useRef(null)
};

const playAudio = (audioId) => {
  const audioRef = audioRefs[audioId];
  if (audioRef.current) {
    audioRef.current.play();
  }
};
*/




/*
MAIN SECTION FUNCTIONALITY

//install swiper module for sliding using npm install swiper
//Audio hover
const audioRefs = {
  nature: useRef(null),
  music: useRef(null),
  ambience: useRef(null)
};

const [userInteracted, setuserInteracted] = useState(false);
const handleWrapperClick = () => {
  setuserInteracted(true);
};

const playAudio = (audioId) => {
  const audioRef = audioRefs[audioId];
  if (userInteracted && audioRef.current) {
    audioRef.current.play();
  }
};

const pauseAudio = (audioId) => {
  const audioRef = audioRefs[audioId];
  if (userInteracted && audioRef.current) {
    audioRef.current.pause();
  }
};
*/



/*
ABOUT SECTION FUNCTIONALITY
useEffect(() => {
  const readMoreButton = document.querySelector('.read-more');
  const additionalText = document.querySelector('.additional-text');

  const handleReadMoreButtonClick = () => {
    additionalText.classList.toggle('show');
    readMoreButton.textContent = additionalText.classList.contains('show') ? 'Read Less' : 'Read More';
  };

  readMoreButton.addEventListener('click', handleReadMoreButtonClick);

  return () => {
    readMoreButton.removeEventListener('click', handleReadMoreButtonClick);
  };
}, []);
*/