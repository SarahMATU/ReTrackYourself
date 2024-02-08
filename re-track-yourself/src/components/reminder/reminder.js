import React from "react";
import './reminder.css';

function Reminder (props) {
	
    return (
        <div className="App">
            <div>
            <div className="textBackground">
                <p>Time Remaining until break: 
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

export default Reminder;

