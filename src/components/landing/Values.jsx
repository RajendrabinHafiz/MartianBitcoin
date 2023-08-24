import React from 'react';
import Blog from '../Blog';
import {valuesData} from "../meta/landing";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Values(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="bg-black relative">
            <div className="h-20"></div>
            <div className="max-w-[1080px] w-full mx-auto">
                <div className="flex flex-col self-center mx-4">
                    <div className="pt-4 pb-10 text-6xl font-primary text-white text-center tracking-widest">
                        Martian values
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8 bg-black">
                        {valuesData && 
                            valuesData.map((blog) => (
                                <Blog title={blog.title} contents={blog.contents} color={blog.color} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute left-[-300px] top-[100px] lg:top-[50px] w-[409px] h-[200px] sm:h-[509px] z-30 bg-[#ff914d] blur-[200px] sm:blur-[151px]"></div>
        </div>
    )
}

export default Values