import { Timer } from './Timer';
import { useState } from 'react';

export const App = () => {
  const [seconds, setSeconds] = useState<number>(5);
  const [minutes, setMinutes] = useState<number>(5);
  const [stop, setStop] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(false);

  const setSecondsFunc = (props: number) => {
    setSeconds(props);
  }

  const setStopFunc = (props: boolean) => {
    setStop(props);
  }

  const setMinutesFunc = (props: number) => {
    setMinutes(props);
  }

  return(
    <div>
      <div>Pomodoro App</div>
      <Timer 
        setSecondsFunc={setSecondsFunc} 
        seconds={seconds} 
        stop={stop}
        setStopFunc={setStopFunc}
        play={play}
        setMinutesFunc={setMinutesFunc}
        minutes={minutes} />
      <button onClick={()=>{setPlay(true); setStop(false)}}>Play</button>
      <button onClick={()=>{setStop(true); setPlay(false)}}>Stop</button>
    </div>
  )
}