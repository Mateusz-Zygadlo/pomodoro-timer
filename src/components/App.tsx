import { useState } from 'react';
import { Timer } from './Timer';
import { Container } from './styles/Container';
import { Paragraph } from './styles/Paragraph';
import { PomodoroButton } from './styles/PomodoroButton';
import { GlobalStyles } from './styles/GlobalStyles';
import { TimerChoice } from './styles/TimerChoice';
import { Time } from './styles/Time';
 
export const App = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(25);
  const [stop, setStop] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(false);
  const [finish, setFinish] = useState<boolean>(false);

  const setSecondsFunc = (props: number) => {
    setSeconds(props);
  }

  const setStopFunc = (props: boolean) => {
    setStop(props);
  }

  const setMinutesFunc = (props: number) => {
    setMinutes(props);
  }

  const reset = () => {
    setStop(true);
    setPlay(false);
    setSeconds(0);
    setFinish(false);
  }

  const setTimer = (props: number) => {
    setMinutes(props)
  }

  const setFinishFunc = (props: boolean) => {
    setFinish(props);
  }

  return(
    <Container>
      <GlobalStyles />
      <Paragraph>Pomodoro app</Paragraph>
      <TimerChoice>
        <Time onClick={()=>{reset(); setTimer(5)}}>5 min</Time>
        <Time onClick={()=>{reset(); setTimer(15)}}>15 min</Time>
        <Time onClick={()=>{reset(); setTimer(25)}}>25 min</Time>
      </TimerChoice>
      <Timer 
        setSecondsFunc={setSecondsFunc} 
        seconds={seconds} 
        stop={stop}
        setStopFunc={setStopFunc}
        play={play}
        setMinutesFunc={setMinutesFunc}
        minutes={minutes}
        setFinishFunc={setFinishFunc} />
      {finish ? 
        <PomodoroButton onClick={()=>{reset(); setTimer(25)}}>reset</PomodoroButton> 
      : play ? 
        <PomodoroButton onClick={()=>{setStop(true); setPlay(false)}}>Stop</PomodoroButton>
      :
        <PomodoroButton onClick={()=>{setPlay(true); setStop(false)}}>Play</PomodoroButton>
      }
    </Container>
  )
}