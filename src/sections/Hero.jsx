import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="h-screen w-full object-contain">
      <video autoPlay loop muted id="video">
        <source src="video.mp4" type="video/mp4" />
      </video>

      <div className="w-full h-full top-[40vh] text-center absolute m-auto">
        <h1 className="text-5xl md:text-6xl">Invest in your future</h1>
        <p className="text-xl md:text-2xl font-extralight uppercase mb-6">
        The revolutionairy Martian Bitcoin the very first cryptocurrency of Mars
        </p>

        <div>
          <Link to="/training" className="btn">
            Whitepaper
          </Link>
          <Link to="/contact" className="btn">
            BUY
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
