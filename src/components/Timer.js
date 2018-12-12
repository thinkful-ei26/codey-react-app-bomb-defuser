import React from 'react';
import '../css/Timer.css'

const formattedSeconds = (sec) => '00:' + ('0' + sec % 60).slice(-2);
  
export default function Timer(props) {
    return (
        <h1 className="stopwatch-timer">{formattedSeconds(props.currentTime)}</h1>
    );
}


