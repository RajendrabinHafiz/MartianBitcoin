import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Stage({color, stageData}) {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="mx-2 w-full" data-aos="flip-right" data-aos-duration="1000">
            <div className={`my-1 text-2xl font-serif text-center ${color}`}>
                STAGE
            </div>
            <div className="flex flex-col text-white text-center text-md">
                {stageData && stageData.map((data) => (
                    <ui class="list-disc">
                        <li>{data}</li>
                    </ui>
                ))}
            </div>
        </div>
    )
}

export default Stage;