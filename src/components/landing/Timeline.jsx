import React from 'react';
import CircleBar from './timeline/CircleBar';
import Stage from './timeline/Stage';
import TimelineBar from './timeline/TimelineBar';
import { timeStageData } from '../meta/landing';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Timeline() {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="bg-black relative">
            <div className="h-20"></div>
            <div className="max-w-[1080px] w-full mx-auto">
                <div className="flex flex-col self-center px-6">
                    <div className="pt-4 pb-10 text-3xl sm:text-6xl font-primary text-white text-center tracking-widest">
                        PROJECT TIMELINE
                    </div>
                    {/* <div className="grid grid-cols-4">
                        <CircleBar color="bg-[#8dd0c0]" number="1" direction={false}/>
                        <Stage color="text-orange-600" stageData={timeStageData[1].contents}/>
                        <CircleBar color="bg-[#ff914d]" number="3" direction={false}/>
                        <Stage color="text-violet-500" stageData={timeStageData[3].contents}/>
                    </div>
                    <div className="grid grid-cols-4">
                        <TimelineBar color="bg-[#8dd0c0]" markDirection={false} roundDirection="left"/>
                        <TimelineBar color="bg-[#e45d56]" markDirection={true} roundDirection="none"/>
                        <TimelineBar color="bg-[#ff914d]" markDirection={false} roundDirection="none"/>
                        <TimelineBar color="bg-[#4e4cc0]" markDirection={true} roundDirection="right"/>
                    </div>
                    <div className="grid grid-cols-4">
                        <Stage color="text-[#8dd0c0]" stageData={timeStageData[0].contents}/>
                        <CircleBar color="bg-[#e45d56]" number="2" direction={true}/>  
                        <Stage color="text-orange-300" stageData={timeStageData[2].contents}/>
                        <CircleBar color="bg-[#4e4cc0]" number="4" direction={true}/>   
                    </div> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="grid grid-rows-3 gap-10">
                            <CircleBar color="bg-[#8dd0c0]" number="1" direction={false} />
                            <TimelineBar color="bg-[#8dd0c0]" markDirection={false} roundDirection="left"/>
                            <Stage color="text-[#8dd0c0]" stageData={timeStageData[0].contents}/>
                        </div>
                        <div className="grid grid-rows-3 gap-10">
                            <Stage color="text-orange-600" stageData={timeStageData[1].contents}/>
                            <TimelineBar color="bg-[#e45d56]" markDirection={true} roundDirection="none"/>
                            <CircleBar color="bg-[#e45d56]" number="2" direction={true}/>  
                        </div>
                        <div className="grid grid-rows-3 gap-10">
                            <CircleBar color="bg-[#ff914d]" number="3" direction={false}/>
                            <TimelineBar color="bg-[#ff914d]" markDirection={false} roundDirection="none"/>
                            <Stage color="text-orange-300" stageData={timeStageData[2].contents}/>
                        </div>
                        <div className="grid grid-rows-3 gap-10">
                            <Stage color="text-violet-500" stageData={timeStageData[3].contents}/>
                            <TimelineBar color="bg-[#4e4cc0]" markDirection={true} roundDirection="right"/>
                            <CircleBar color="bg-[#4e4cc0]" number="4" direction={true}/>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;