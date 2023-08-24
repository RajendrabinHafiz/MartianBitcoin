import React from 'react';
import {Button} from '../Button';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Wallet() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="bg-black relative">
        <div className="h-28"></div>
        <div className="max-w-[1080px] w-full mx-auto">
            <div className="flex mx-2">
                <div className="w-1/2" data-aos="fade-up" data-aos-duration="1000">
                    <img src="https://uploads-ssl.webflow.com/642970f5f9d51a68cb962039/642e40b0c0355a130fc48b84_Screen%202.jpg"/>
                </div>
                <div className="w-1/2 flex flex-col p-4 text-center font-primary">
                    <div className="text-white text-3xl sm:text-6xl md:text-7xl lg:text-8xl" data-aos="fade-up" data-aos-duration="1000">
                        Martian Wallet
                    </div>
                    <div className="text-white text-xl my-4" data-aos="fade-up" data-aos-duration="1000">
                        Prototype design
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <img src="https://uploads-ssl.webflow.com/642970f5f9d51a68cb962039/642e4b4e2003e42309c30f1c_Screen%201%20(1).png"/>
                    </div>
                </div>
            </div>
            <div className="absolute left-[-300px] top-[100px] lg:top-[50px] w-[409px] h-[200px] sm:h-[509px] z-2 0 bg-[#ff914d] blur-[200px] sm:blur-[151px]"></div>
        </div>
        </div>
    )
}

export default Wallet