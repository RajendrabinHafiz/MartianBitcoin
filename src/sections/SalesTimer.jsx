import { useCallback, useEffect, useRef, useState } from "react";
import Timer from '../components/Timer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SalesTimer = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const minuteCircle = useRef();
  const secondCircle = useRef();
  const hourCircle = useRef();
  const daysCircle = useRef();
  const changeCircleoffset = (seconds, minutes, hours, days) => {
    if (daysCircle.current) {
      daysCircle.current.style.strokeDashoffset = `${
        days > 0 ? 440 - (days * 440) / 365 : 440
      }px`;
      hourCircle.current.style.strokeDashoffset = `${
        hours > 0 ? 451 - (hours * 451) / 24 : 451
      }px`;
      minuteCircle.current.style.strokeDashoffset = `${
        minutes > 0 ? 451 - (minutes * 451) / 60 : 451
      }px`;
      secondCircle.current.style.strokeDashoffset = `${
        seconds > 0 ? 451 - (seconds * 451) / 60 : 451
      }px`;
    }
  };
  const getTimeDifference = useCallback((countDownDate) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownDate - currentTime;
    const days = Math.floor(timeDiffrence / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDiffrence % (60 * 1000)) / 1000);
    if (timeDiffrence < 0) {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval();
    } else {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  }, []);
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth(),
      customDate.getDate() + 50,
      customDate.getHours() + 18,
      customDate.getMinutes() + 25,
      customDate.getSeconds() + 45
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, [getTimeDifference]);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div className="flex flex-col">
      <div className="h-20"></div>
      <div className="flex justify-center text-xl text-white font-primary">PRIVATE SALE IN</div>
      <div className="flex min-h-48 md:h-108 flex-wrap md:flex-row justify-center gap-16 items-center">
        <Timer circleType={daysCircle} time={countDownTime?.days} unit={countDownTime?.days === 1 ? "Day" : "Days"}/>
        <Timer circleType={hourCircle} time={countDownTime?.hours} unit={countDownTime?.hours === 1 ? "Hour" : "Hours"}/>
        <Timer circleType={minuteCircle} time={countDownTime?.minutes} unit={countDownTime?.minutes === 1 ? "Minute" : "Minutes"}/>
        <Timer circleType={secondCircle} time={countDownTime?.seconds} unit={countDownTime?.seconds === 1 ? "Second" : "Seconds"}/>
      </div>
    </div>
  );
};
export default SalesTimer;
