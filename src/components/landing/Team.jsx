import React from 'react';
import Blog from '../Blog';
import {teamData} from "../meta/landing";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Team(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="bg-black">
            <div className="h-20"></div>
            <div className="max-w-[1080px] w-full mx-auto">
                <div className="flex flex-col self-center mx-4">
                    <div className="pt-4 pb-10 text-6xl font-primary text-white text-center tracking-widest">
                        Meet The Martian Team
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8 bg-black">
                        {teamData && 
                            teamData.map((blog) => (
                                <Blog title={blog.title} contents={blog.contents} color={blog.color} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team