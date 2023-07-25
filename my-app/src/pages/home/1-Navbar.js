import React, { useEffect, useRef,} from 'react';

export default function Navbar() {

    // Navigation bar functionality
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

    //Audio hover functionality
    const audioRefs = {
        intro: useRef(null)
    };
    
    const playAudio = (audioId) => {
        const audioRef = audioRefs[audioId];
        if (audioRef.current) {
          audioRef.current.play();
        }
    };
    
    return (
    <>

      {/*page header and navbar*/}
      <header className="header">
          <a href="#" className="logo" onClick={() => playAudio('intro')}>
              <i className="fas fa-music"></i> Sons Enchantés
              <div className="audio">
                  <audio ref={audioRefs.intro} id="intro">
                        <source src="assets/audios/Home section/logo/sons enchantes.mp3" type="audio/mpeg"/>
                  </audio>
              </div>
          </a>
          <nav className="navbar">
              <div id="nav-close" className="fas fa-times"></div>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#genre">Genre</a>
              <a href="#footer">Contact Us</a>
          </nav>

          <div className="icons">
              <div id="menu-btn" className="fas fa-bars"></div>
              <div id="search-btn" className="fas fa-search"></div>
          </div>

          {/*search form*/}
          <div className="search-form">
              <div id="close-search" className="fas fa-times"></div>

              <form action="">
                  <input type="search" name="" placeholder="Search here..." id="search-box" /> 
                  <label htmlFor="search-box" className="fas fa-search"></label>
              </form>   
          </div>
          {/* search ends */}
          
      </header>
      {/*page header and navbar ends*/} 

    </>
    );
}



        