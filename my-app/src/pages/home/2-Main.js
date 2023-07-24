import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Main() {
    
    //Audio hover functionality
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


    return (
    <>
        {/*Home (Main) section starts*/}
        <section className="home" id="home">

            <div className="swiper-home-slider" onClick={handleWrapperClick}>

                <Swiper 
                modules={[Navigation]} 
                className="swiper-wrapper"
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}>

                    {/* 1st slide */}
                    <SwiperSlide className="swiper-slide">
                        <div className="box" style={{ backgroundImage: 'url(assets/images/nature.jpg)', backgroundRepeat: 'no-repeat' }}>
                            <div className="content">
                                <div className="audio">
                                    <audio ref={audioRefs.nature} id="nature">
                                        <source src="assets/audios/Home section/slides/1-forest-with-small-river-birds-and-nature-field-recording-6735.mp3" type="audio/mpeg" />
                                    </audio>
                                </div>
                                <span>Connect with</span>
                                <h3 onMouseOver={() => playAudio('nature')} onMouseOut={() => pauseAudio('nature')}>Nature</h3>
                                <div className="s-box" onMouseOver={() => playAudio('nature')} onMouseOut={() => pauseAudio('nature')}>
                                Immerse yourself in the captivating melodies inspired by the rhythmic symphony of the natural world.
                                Let the music transport you to lush forests, serene waterfalls, and vast landscapes, where every note resonates
                                within oneself and with the harmony of the nature.
                                </div>
                                <a href="#genre" className="btn">EXPLORE</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* 2nd slide */}
                    <SwiperSlide className="swiper-slide">
                        <div className="box second" style={{ backgroundImage: 'url(assets/images/music.jpg)', backgroundRepeat: 'no-repeat' }}>
                            <div className="content">
                                <div className="audio">
                                    <audio ref={audioRefs.music} id="music">
                                        <source src="assets/audios/Home section/slides/2-summer-walk-152722.mp3" type="audio/mpeg" />
                                    </audio>
                                </div>
                                <span>Synchronize with</span>
                                <h3 onMouseOver={() => playAudio('music')} onMouseOut={() => pauseAudio('music')}>Music</h3>
                                <div className="s-box" onMouseOver={() => playAudio('music')} onMouseOut={() => pauseAudio('music')}>
                                Dive into the captivating world of synchronization, where music becomes your guide.
                                Feel the pulse of the rhythm as it resonates within you, syncing your heartbeat with the melodies.
                                Allow the music to take control, as it harmonizes with your emotions and moves your body in perfect rhythm.
                                </div>
                                <a href="#genre" className="btn">EXPLORE</a>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* 3rd slide */}
                    <SwiperSlide className="swiper-slide">
                        <div className="box" style={{ backgroundImage: 'url(assets/images/ambience.jpg)', backgroundRepeat: 'no-repeat' }}>
                            <div className="content">
                                <div className="audio">
                                    <audio ref={audioRefs.ambience} id="ambience">
                                        <source src="assets/audios/Home section/slides/3-relaxing-music-part-1-141198.mp3" type="audio/mpeg" />
                                    </audio>
                                </div>
                                <span>Feel the</span>
                                <h3 onMouseOver={() => playAudio('ambience')} onMouseOut={() => pauseAudio('ambience')}>Ambience</h3>
                                <div className="s-box" onMouseOver={() => playAudio('ambience')} onMouseOut={() => pauseAudio('ambience')}>
                                Let the soothing melodies transport you to a realm of tranquility and inspiration.
                                Experience the gentle whispers of the piano, the soul-stirring notes of the violin, the rhythmic
                                beats of the drums, and the ethereal sounds of various instruments blending harmoniously.
                                </div>
                                <a href="#genre" className="btn">EXPLORE</a>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>    
                
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>

            </div>
        </section>
        {/*Home (Main) section ends*/} 

    </>
    );
}
