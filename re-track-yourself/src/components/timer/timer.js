import React from "react";
import './timer.css';


function Timer(props) {

    console.log(props.time);

    return (
        <div className="App">
            <div>
                <div className="textBackground">
                    <p>Time Remaining : 
                        <span>{props.time}</span> 
                    </p>
                </div>
                
                <div className="ButtonRow">
                    <button className="setButton">Start</button>
                    <button className="setButton">Stop</button>
                    <button className="setButton">On Break</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;

