import { useState, useRef } from 'react'
import ResultModal from './ResultModal'

export default function TimerChallenge({title, targetTime}){

    const timer = useRef();
    const dialog = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart(){
        timer.current = setTimeout(() => { 
            setTimerExpired(true);
            setTimerStarted(false);
            dialog.current.showModal();
            //console.log('Timer - ' + targetTime + ' secs has finished');
        }, targetTime * 1000);
        
        setTimerExpired(false);
        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);
        setTimerStarted(false);
        setTimerExpired(false);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost"></ResultModal>
            <section className="challenge">
                <h2>{title}</h2>
                
                <p className="challenge-time">
                    {targetTime} second{targetTime > 0 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? "active" : ''}>
                    {timerStarted && 'Time is running'}
                    {timerExpired && 'Timer expired'}
                </p>
            </section>
        </>
    )
}