'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';
import { CursorImage } from '../components';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Protocol(){
  useEffect(() => {
    AOS.init();
  }, [])
  return(
  <section className={`${styles.paddings} relative z-10`}>
    <div
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <div
        className="flex-[0.95] flex justify-center flex-col" data-aos="fade-up" data-aos-duration="500"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>Martian Protocol</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </div>

      <div
        className={`flex-1 ${styles.flexCenter}`} data-aos="fade-right" data-aos-duration="1000"
      >
        <CursorImage  className="w-[90%] h-[90%] object-contain" imgPath="https://uploads-ssl.webflow.com/642970f5f9d51a68cb962039/642d2429d663b263055a74ce_Black%20Modern%20Space%20Phone%20Wallpaper%201.png"/>
      </div>
    </div>
  </section>
  )
};

export default Protocol;
