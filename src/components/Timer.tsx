import React, { useEffect } from 'react';

interface Props{
  setSecondsFunc(props: number): void;
  seconds: number;
  stop: boolean;
  setStopFunc(props: boolean): void;
  play: boolean;
  setMinutesFunc(props: number): void;
  minutes: number;
}

export const Timer: React.FC<Props> = ({ setSecondsFunc, seconds, stop, setStopFunc, play, setMinutesFunc, minutes }) => {
  useEffect((): any => {
    const timer: any = !stop && !!play && setInterval(() => {
      if(seconds === 0 && minutes === 0){
        setStopFunc(true);

        return;
      }else if(seconds === 0 && minutes){
        setMinutesFunc(minutes - 1);
        setSecondsFunc(5);

        return;
      }

      setSecondsFunc(seconds - 1);
    }, 1000)

    return (): any => clearInterval(timer);

  });

  return(
    <div>{minutes} {seconds}</div>
  )
}