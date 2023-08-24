import React from 'react';
import {Button} from '../Button';
import CursorImage from '../CursorImage';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="bg-black relative">
        <div className="max-w-[1080px] w-full mx-auto">
            <div className="flex flex-col mx-2 md:flex-row gap-8 bg-black text-white">
                <div className="flex flex-col my-2 lg:my-4 w-full md:w-1/2">
                    <div className="my-2 font-primary text-4xl md:text-6xl mx-auto text-center lg:text-8xl" data-aos="fade-up" data-aos-duration="1000">
                        Invest in your future</div>
                    <div className="mt-6 lg:mt-12 mx-12 lg:mx-2 mb-10 lg:mb-20 lg:mr-20 text-lg text-center" data-aos="fade-up" data-aos-duration="1000">
                        The revolutionary Martian Bitcoin the very first cryptocurrency of Mars
                    </div>
                    <div className="flex flex-col mx-2 sm:flex-row justify-center md:gap-8" data-aos="fade-up" data-aos-duration="1000">
                    <Button contents="Whitepaper" />
                    <Button contents="BUY" />
                    </div>
                </div>
                <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                    <CursorImage imgPath={"https://uploads-ssl.webflow.com/642970f5f9d51a68cb962039/642a873b50279a860986092b_hero-img.png"}/>
                </div>
            </div>
            <div className="absolute overflow-hidden right-[-300px] top-[50px] w-[409px] h-[509px] z-10 bg-[#ff914d] blur-[151px]"></div>
        </div>
        </div>
    )
}

export default Hero