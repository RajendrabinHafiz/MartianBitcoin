'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { CursorImage } from '../components';
import Button from '../components/Button'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function NFT(){
  useEffect(() => {
    AOS.init();
  }, [])
  return(
  <section className={`${styles.paddings} relative z-10`}>
    <div
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <div
        className={`flex-1 ${styles.flexCenter}`}
      >
        <CursorImage className="w-[90%] h-[90%] object-contain" imgPath="https://uploads-ssl.webflow.com/642970f5f9d51a68cb962039/642e3cf959ef94770f2ca5e4_Green%20and%20Black%20Tech%20Crypto%20Instagram%20Post%201.png"/>
      </div>
      <div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| NFT" />
        <TitleText title={<>Martian NFT's</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px] text-lg text-white">
          <Button contents="COMING SOON"/>
        </div>
      </div>
    </div>
  </section>
  )
};

export default NFT;
