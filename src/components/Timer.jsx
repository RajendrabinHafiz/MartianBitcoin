import React from 'react';
function Timer({circleType, time, unit}) {
    return(
        <div className="flex flex-col">
        <div className="relative">
            <svg className="-rotate-90 h-48 w-48">
            <circle
                r="70"
                cx="90"
                cy="90"
                className="fill-transparent stroke-[#f58e07] stroke-[6px]"
            ></circle>
            <circle
                r="70"
                ref={circleType}
                cx="90"
                cy="90"
                style={{
                strokeDasharray: "440px",
                }}
                className="fill-transparent stroke-white  stroke-[6px]"
            ></circle>
            </svg>
            <div className="text-white absolute top-20 left-11 text-6xl font-semibold font-primary flex flex-col items-center w-24 h-20">
            <span className="text-center">{time}</span>
            </div>
        </div>
        <div className="flex flex-col">
            <span className="mr-2 text-center text-white text-xl font-primary">
                {unit}
            </span>
        </div>
      </div>
    )
}

export default Timer;