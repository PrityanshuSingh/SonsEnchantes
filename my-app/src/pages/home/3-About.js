import React, { useEffect } from 'react';

export default function About() {
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
      
    return (
        <>

        <section className="about" id="about">
            <div className="heading">
                <h3>Journey to Serenity</h3>
            </div>

            <div className="image1">
                <img src="assets/images/1.jpg" alt="Image 1"/>
            </div>
            <div className="image2">
                <img src="assets/images/2.jpg" alt="Image 2"/>
            </div>
            <div className="image3">
                <img src="assets/images/3.jpg" alt="Image 3"/>
            </div>

            <div className="content">
                <h3>Through melodies</h3>

                <div className="a-box">
                    <p>At Sons Enchantes, we believe that music has the power to heal, inspire, and create harmony within our souls. 
                        Our mission is to curate a collection of mesmerizing melodies and captivating compositions that transport you to a realm of tranquility and inner peace. 
                    </p>
                    <p className="additional-text">Embark on a transformative journey to serenity where the gentle melodies of music guide you towards a state of tranquility. 
                        Immerse yourself in the soothing rhythms and harmonious melodies that uplift the soul and rejuvenate the spirit. Our mission is 
                        to create a sanctuary of calmness, offering a respite from the noise and chaos of everyday life. 
                        Join us in this beautiful exploration of inner peace and discover the power of melody in creating moments of serenity.
                    </p>
                </div>

                <div className="btn read-more">Read More</div>
            </div>
        </section>
        
        </>
    );
}
