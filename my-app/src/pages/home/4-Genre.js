import React from 'react';

export default function Genre() {
  return (
    <>

      {/*Genre section starts*/}
      <section class="genre" id="genre">

            <div class="g-heading">
                <h3>popular genres</h3>
            </div>

            <div class="g-box-container">

                {/*1st box*/}
                <div class="g-box">
                    <div class="g-image">
                        <img src="assets/images/g-image/g-nature2.jpg" alt=""/>
                    </div>
                    <div class="g-content">
                        <h3>Nature Sounds</h3>
                        <p>Sounds such as flowing water, chirping birds, or gentle rain, can evoke a sense of tranquility and calmness within...</p>
                        <div class="audio">
                            <audio controls>
                                <source src="assets/audios/1_Nature-sounds/jackmichaelking__gentle-ocean-waves-birdsong-and-gull.mp3" type="audio/mpeg"/>
                            </audio>
                        </div>
                        <a href="#" class="btn">Dive in</a>
                    </div>
                </div>

                {/*2nd box*/}
                <div class="g-box">
                    <div class="g-image">
                        <img src="assets/images/g-image/g-classical.jpg" alt=""/>
                    </div>
                    <div class="g-content">
                        <h3>Classical</h3>
                        <p>Known for its complexity, beauty, and emotional depth, it includes orchestral works, chamber music, and more...</p>
                        <div class="audio">
                            <audio controls>
                                <source src="assets/audios/2_Classical/Gloria-in-D-Major-RV-589-Qui-Sedes-Ad-Dexteram-Patris-Allegro-CLH011001.mp3" type="audio/mpeg"/>
                            </audio>
                        </div>
                        <a href="#" class="btn">Dive in</a>
                    </div>
                </div>

                {/*3rd box*/}
                <div class="g-box">
                    <div class="g-image">
                        <img src="assets/images/g-image/g-instrumental3.jpg" alt=""/>
                    </div>
                    <div class="g-content">
                        <h3>Instrumental</h3>
                        <p>Focus on the melodies, harmonies, and expressiveness of the instruments such as solo piano, acoustic guitar and many more...</p>
                        <div class="audio">
                            <audio controls>
                                <source src="assets/audios/3_Instrumental/Yiruma_-_River_Flows_in_You_(ColdMP3.com).mp3" type="audio/mpeg"/>
                            </audio>
                        </div>
                        <a href="#" class="btn">Dive in</a>
                    </div>
                </div>

                {/*4th box*/}
                <div class="g-box">
                    <div class="g-image">
                        <img src="assets/images/g-image/g-jazz3.jpg" alt=""/>
                    </div>
                    <div class="g-content">
                        <h3>Jazz</h3>
                        <p>With its captivating improvisation and rich harmonies, immerse into a world of sophisticated elegance and heartfelt emotions...</p>
                        <div class="audio">
                            <audio controls>
                                <source src="assets/audios/4_Jazz/glass-of-wine-143532.mp3" type="audio/mpeg"/>
                            </audio>
                        </div>
                        <a href="#" class="btn">Dive in</a>
                    </div>
                </div>

                {/*5th box*/}
                <div class="g-box">
                    <div class="g-image">
                        <img src="assets/images/g-image/g-ambient.jpg" alt=""/>
                    </div>
                    <div class="g-content">
                        <h3>Ambient</h3>
                        <p>Creating a calming and atmospheric backdrop with its subtle melodies, and spacious arrangements promoting relaxation and mindfulness...</p>
                        <div class="audio">
                            <audio controls>
                                <source src="assets/audios/5_Ambient/MANTRON.mp3" type="audio/mpeg"/>
                            </audio>
                        </div>
                        <a href="#" class="btn">Dive in</a>
                    </div>
                </div>

            </div>
      </section>
      {/*Genre section ends*/}
    </>
  );
}
