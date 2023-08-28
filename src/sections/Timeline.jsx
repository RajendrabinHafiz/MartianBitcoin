'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { timelinestage } from '../constants';
import { staggerContainer } from '../utils/motion';
import { TimelineStage, TitleText, TypingText } from '../components';

function Timeline() {

  return(
  <section className={`${styles.paddings} relative z-10`}>
    <div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Project Timeline</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {timelinestage.map((item, index) => (
          <TimelineStage key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </div>
  </section>
  )
};

export default Timeline;
