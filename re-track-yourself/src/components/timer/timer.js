import React from "react";
import './timer.css';


function Timer(props) {

    console.log(props.time);

    return (
        <div className="App">
            <div>
                <p>Time Remaining : 
                    <span>{props.time}</span> 
                </p>
                <button>Start</button>
                <button>Stop</button>
                <button>On Break</button>
            </div>
        </div>
    );
}

export default Timer;

