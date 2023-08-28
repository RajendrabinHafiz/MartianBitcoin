import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Wallet() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="relative">
        <div className="h-28"></div>
        <div className="max-w-[1080px] w-full mx-auto">
            <div className="flex mx-2">
                <div className="w-1/2" data-aos="fade-up" data-aos-duration="1000">
                    <img src="642e40b0c0355a130fc48b84_Screen 2.webp"/>
                </div>
                <div className="w-1/2 flex flex-col p-4 text-center font-primary">
                    <div className="text-white text-3xl sm:text-6xl md:text-7xl lg:text-8xl" data-aos="fade-up" data-aos-duration="1000">
                        Martian Wallet
                    </div>
                    <div className="text-white text-xl my-4" data-aos="fade-up" data-aos-duration="1000">
                        Prototype design
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img src="./Untitled-1.webp"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Wallet