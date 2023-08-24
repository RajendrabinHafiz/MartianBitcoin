import React from 'react';
const TimelineComponents = ({color, roundDirection}) => {
    const getTimeline = () => {
        if (roundDirection === "left") {}
    }
}
function TimelineBar({color, markDirection, roundDirection}) {
    const roundOption = () => {
       if (roundDirection === "left") {
        return `rounded-l-2xl`;
       } else if (roundDirection === "right") {
        return `rounded-r-2xl`;
       } else {
        return `rounded-none`;
       }
    };
    var round = roundOption();
    return(
        <div>
            <div className="flex flex-col items-center">
                {markDirection && (
                    <>
                        <img className="h-6" src="https://uploads-ssl.webflow.com/642970f5f9d51a68cb962039/642d3c3725c1bb3373be15b6_Polygon%202.png" alt="Image" />    
                        <div className={`${round} flex items-center justify-center h-12 w-full ${color}`}></div>
                        <div className="h-6"></div>
                    </>
                )}

                {!markDirection && (
                <>
                    <div className="h-6"></div>
                    <div className={`${round} flex items-center justify-center h-12 w-full ${color}`}></div>
                    <img className="h-6" src="https://uploads-ssl.webflow.com/642970f5f9d51a68cb962039/642d370ebf1f5edfc3a0a5b0_Polygon%201.png" alt="Image" />
                </>
                )}
            </div>
        </div>
    )
}

export default TimelineBar;