import React from "react";
import './reminder.css';

function Reminder (props) {
	
    return (
        <div className="App">
            <div>
            <div className="textBackground">
                <p>Break Time in: 00:03:47
                    <span>{props.time}</span> 
                </p>
            </div>
            
            <div className="ButtonRow">
                <button className="setButton">Start</button>
                <button className="setButton">Stop</button>
            </div>
            </div>
        </div>
    );
}

export default Reminder;

