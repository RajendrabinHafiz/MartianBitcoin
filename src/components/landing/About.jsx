import React from 'react';
import CursorImage from '../CursorImage';
import {Button} from '../Button';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="bg-black p-2 relative">
        <div className="h-20"></div>
        <div className="max-w-[1080px] w-full mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-center text-white">
                <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-duration="1000">
                        <CursorImage imgPath={"https://uploads-ssl.webflow.com/642970f5f9d51a68cb962039/642d1683952aaf75991fce42_1%201.png"}/>
                </div>
                <div className="flex flex-col font-primary my-4 w-full lg:w-1/2">
                    <div className="my-2 text-6xl text-center lg:text-6xl" data-aos="fade-up" data-aos-duration="1000">About Martian</div>
                    <div className="flex flex-col gap-2 mt-12 mb-20 mx-10 text-lg text-start">
                        <div data-aos="fade-up" data-aos-duration="1000">Martian Bitcoin is a cryptocurrency that aims to build a community around the merging of two interesting themes: 
                    cryptocurrencies and space exploration. We can all agree that cryptocurrency will be the future of money and 
                    the space exploration has been a dream of humanity since its inception.</div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                        Our goal is to create a synergy between the two and build one of the largest communities. 
                        Martian Bitcoin focuses on providing an alternative financial system that is not controlled by any central authority and is built on true peer-to-peer technologies. 
                        The mission is to pave the way for future Mars colonization and ensure humanity's survival for generations to come.
                        </div>
                    </div>
                    <div className="flex justify-center" data-aos="fade-up" data-aos-duration="1000">
                    <Button contents="LEARN MORE" />
                    </div>
                </div>
            </div>
            <div className="absolute left-[-300px] top-[500px] lg:top-[50px] w-[409px] h-[509px] z-2 0 bg-[#ff914d] blur-[151px]"></div>
        </div>
        </div>
    )
}

export default About;