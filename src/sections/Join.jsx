import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Join({header}) {
    return(
        <div className="">
        <div className="h-20"></div>
        <div className="max-w-[840px] lg:max-w-[1080px] w-full mx-auto bg-gradient-to-b from-purple-400 to-transparent">
            <div className="mt-8">
                <div className="flex flex-col text-white font-primary">
                    <div className="my-3 md:my-6 text-xl text-center">
                        {header}
                    </div>
                    <div className="mt-4 mb-8 mx-8 sm:mx-14 md:mx-20 lg:mx-28 text-4xl sm:text-6xl md:text-7xl text-bold text-center">
                        Be A Part Of The Next Big Thing
                    </div>
                    <div className="mx-6 md:mx-28 mb-8 flex gap-2 justify-around">
                        <img className="h-8 md:h-12 lg:h-16" src="https://uploads-ssl.webflow.com/642970f5f9d51a68cb962039/642e5d73e42d3123ce595519_Group%203.svg"/>
                        <a href="https://t.me/martianbitcoin">
                            <div className="bg-transparent p-1 md:p-4 text-lg md:text-2xl lg:text-3xl font-primary">Join Telegram</div>
                        </a>
                        <a href="https://discord.gg/yNKHrqnTFF">
                            <div className="bg-transparent p-1 md:p-4 text-lg md:text-2xl lg:text-3xl font-primary">Join Discord</div>
                        </a>
                        <img className="h-8 md:h-12 lg:h-16" src="	https://uploads-ssl.webflow.com/642970f5f9d51a68cb962039/642e5e936f382a63b1ea9862_Vector.svg"/>
                    </div>
                    <div className="h-14 md:h-20"></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Join;