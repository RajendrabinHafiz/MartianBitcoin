'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { startingFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import Button from '../components/Button'
import { CursorImage } from '../components';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return(
  <section className={`${styles.paddings} relative z-10`}>
    <div
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <div
        className={`flex-1 ${styles.flexCenter}`} data-aos="fade-left" data-aos-duration="1000"
      >
        <CursorImage imgPath="get-started.png" className="w-[90%] h-[90%] object-contain"/>
      </div>
      <div
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| What is Martian Bitcoin?" />
        <TitleText title={<>About Martian</>} />
        <div className="mt-[31px] flex flex-col text-lg max-w-[370px] gap-[24px] text-white">
          <div data-aos="fade-up" data-aos-duration="500">Martian Bitcoin is a cryptocurrency that aims to build a community around the merging of two interesting themes: 
                    cryptocurrencies and space exploration. We can all agree that cryptocurrency will be the future of money and 
                    the space exploration has been a dream of humanity since its inception.</div>
          <div data-aos="fade-up" data-aos-duration="500">
          Our goal is to create a synergy between the two and build one of the largest communities. 
          Martian Bitcoin focuses on providing an alternative financial system that is not controlled by any central authority and is built on true peer-to-peer technologies. 
          The mission is to pave the way for future Mars colonization and ensure humanity's survival for generations to come.
          </div>
          <Button contents="Learn More"/>
        </div>
      </div>
    </div>
  </section>
  )
};

export default About;
