import React from "react";
import './reminder.css';

function Reminder (props) {

    let remind = localStorage.getItem("remind");


	
    return (
        <div className="App">
            <div>
            <div className="textBackground">
                <p>Break Time in: 
                    <span>{remind}</span> 
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

