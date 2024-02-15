import React from "react";
import './timer.css';



function Timer(props) {

    const countTime = props.time*60;

    function StartTimer() {
        console.log("Start");
    }

    function StopTimer() {
        console.log("Start");

    }

    function OnBreak() {
        console.log("Start");

    }

    console.log("Component Did Mount timer:", props.time);

    return (
        <div className="App">
            <div>
                <div className="textBackground">
                    <p>Time Remaining : 
                        <span>{countTime}</span> 
                    </p>
                </div>
                
                <div className="ButtonRow">
                    <button className="setButton" onClick={() => StartTimer()}>Start</button>
                    <button className="setButton" onClick={() => StopTimer()}>Stop</button>
                    <button className="setButton" onClick={() => OnBreak()}>On Break</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;

