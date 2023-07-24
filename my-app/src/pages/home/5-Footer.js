import React from 'react';

export default function Footer() {
  return (
    <>

      {/*Footer section starts*/}
      <section class="footer" id="footer">
            <div class="box-container">
                
                <div class="box">
                    <h3>Quick Links</h3>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#genre">Genre</a>
                </div>
                
                <div class="box">
                    <h3>Contact info</h3>
                    <a href="tel:+918276278473"><i class="fas fa-phone"></i> +91 827-627-8473</a>
                    <a href="tel:+918653463463"><i class="fas fa-phone"></i> +91 865-346-3463</a>
                    <a href="mailto:prityanshusingh2003@gmail.com"><i class="fas fa-envelope"></i> prityanshusingh2003@gmail.com</a>
                    <a href="https://tinyurl.com/4p3bwb4h"><i class="fas fa-map"></i> Uttar Pradesh, India - 246761</a>  
                  </div>
                  
                  <div class="box">
                    <h3>Follow Us</h3>
                    <a href="https://instagram.com/prityanshu__0111?igshid=MzNlNGNkZWQ4Mg=="><i class="fab fa-instagram"></i> Instagram</a>
                    <a href="https://www.linkedin.com/in/prityanshu-singh-a23115248"><i class="fab fa-linkedin"></i> Linkedin</a>
                    <a href="https://github.com/PrityanshuSingh?fbclid=PAAaa5rY1-GB0XWcIJmb6QDBsajl1Tz_WRCMYJRzkEeUGqFgFhyNCKIK4p_Ss">
                        <i class="fab fa-github"></i> Github</a>
                  </div>
                  
            </div>

            <div class="credit">
                <div class="c-box">
                     created by <span> Prityanshu Singh </span> with {"<3"} 
                </div>
            </div>

        </section>
        {/*Footer section ends*/}
    </>
  );
}
