import React from 'react';
import CursorImage from '../CursorImage';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Protocol() {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="bg-black p-2 relative">
        <div className="h-20"></div>
        <div className="max-w-[1080px] w-full mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-center text-white">
                <div className="flex flex-col font-primary my-4 w-full lg:w-1/2">
                    <div className="my-2 text-6xl text-center lg:text-6xl" data-aos="fade-up" data-aos-duration="1000">Martian Protocol</div>
                    <div className="flex flex-col gap-2 mt-12 mb-20 mx-10 text-lg text-start">
                        <div data-aos="fade-up" data-aos-duration="1000">SUPPLY - 500M MBTC We have decided to keep the tax low to promote more trading volume which is will help us be listed on bigger Exchanges like Binance and Coin base! Liquidity Lock? - 1 YEAR!</div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                        TAX - 5% BUY&SELL<br></br>
                        Low supply means higher coin/token value which also creates scarcity which is one of the most important qualities for an Asset. Liquidity will be locked for 1year to promote Trust and Transparency for the community.
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">Martian Bitcoin will be launched as a BSC Chain however, as it matures through the Crypto Currency Market it will eventually be released as its own Coin or better known as Blockchain! This is one of many goals we have for Martian Bitcoin on the Roadmap section.</div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                        <CursorImage imgPath={"https://uploads-ssl.webflow.com/642970f5f9d51a68cb962039/642d2429d663b263055a74ce_Black%20Modern%20Space%20Phone%20Wallpaper%201.png"}/>
                </div>
            </div>
            <div className="absolute right-[-300px] top-[500px] lg:top-[50px] w-[409px] h-[509px] z-2 0 bg-[#ff914d] blur-[151px]"></div>
        </div>
        </div>
    )
}

export default Protocol;