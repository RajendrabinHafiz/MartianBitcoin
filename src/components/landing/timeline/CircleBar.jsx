import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Circle({color, number}) {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className={`flex items-center justify-center 
        h-28 w-28 rounded-full ${color}`} >
        <span class="text-white font-sans font-bold text-5xl">
            {number}
        </span>
    </div>
    )
}

function Bar({color}) {
    return(
        <div className={`inline-block h-[70px] w-[3px] min-h-[1em] mt-2 ${color}`}>
        </div>
    )
}

function CircleBar({color, direction, number}) {
    return(
        <div data-aos="flip-up" data-aos-duration="1000">
            {direction && (
              <>
                <div className="flex flex-col items-center gap-2">
                    <Bar color={color}/>
                    <Circle color={color} number={number}/>
                </div>
              </>
            )}
            {!direction && (
            <>
                <div className="flex flex-col items-center gap-2">
                    <Circle color={color} number={number}/>
                    <Bar color={color}/>
                </div>
            </>
            )
            }
        </div>
    )
}

export default CircleBar;