import React from 'react';

export default function Footer() {
  return (
    <>

      {/*Footer section starts*/}
      <section className="footer" id="footer">
            <div className="box-container">
                
                <div className="box">
                    <h3>Quick Links</h3>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#genre">Genre</a>
                </div>
                
                <div className="box">
                    <h3>Contact info</h3>
                    <a href="tel:+918276278473"><i className="fas fa-phone"></i> +91 827-627-8473</a>
                    <a href="tel:+918653463463"><i className="fas fa-phone"></i> +91 865-346-3463</a>
                    <a href="mailto:prityanshusingh2003@gmail.com"><i className="fas fa-envelope"></i> prityanshusingh2003@gmail.com</a>
                    <a href="https://tinyurl.com/4p3bwb4h"><i className="fas fa-map"></i> Uttar Pradesh, India - 246761</a>  
                  </div>
                  
                  <div className="box">
                    <h3>Follow Us</h3>
                    <a href="https://instagram.com/prityanshu__0111?igshid=MzNlNGNkZWQ4Mg=="><i className="fab fa-instagram"></i> Instagram</a>
                    <a href="https://www.linkedin.com/in/prityanshu-singh-a23115248"><i className="fab fa-linkedin"></i> Linkedin</a>
                    <a href="https://github.com/PrityanshuSingh?fbclid=PAAaa5rY1-GB0XWcIJmb6QDBsajl1Tz_WRCMYJRzkEeUGqFgFhyNCKIK4p_Ss">
                        <i className="fab fa-github"></i> Github</a>
                  </div>
                  
            </div>

            <div className="credit">
                <div className="c-box">
                     created by <span> Prityanshu Singh </span> with {"<3"} 
                </div>
            </div>

        </section>
        {/*Footer section ends*/}
    </>
  );
}
