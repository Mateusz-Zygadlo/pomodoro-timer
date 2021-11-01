import React, { useEffect } from 'react';
import { TimerNumbers } from './styles/TimerNumbers';

interface Props{
  setSecondsFunc(props: number): void;
  seconds: number;
  stop: boolean;
  setStopFunc(props: boolean): void;
  play: boolean;
  setMinutesFunc(props: number): void;
  minutes: number;
  setFinishFunc(props: boolean): void;
}

export const Timer: React.FC<Props> = ({ setSecondsFunc, seconds, stop, setStopFunc, play, setMinutesFunc, minutes, setFinishFunc }) => {
  useEffect((): any => {
    const timer: any = !stop && !!play && setInterval(() => {
      if(seconds === 0 && minutes === 0){
        setStopFunc(true);
        setFinishFunc(true);

        return;
      }else if(seconds === 0 && minutes){
        setMinutesFunc(minutes - 1);
        setSecondsFunc(59);

        return;
      }

      setSecondsFunc(seconds - 1);
    }, 1000)

    return (): any => clearInterval(timer);

  });

  return(
    <TimerNumbers>{minutes}:{seconds < 10 ? `0${seconds}`: seconds}</TimerNumbers>
  )
}