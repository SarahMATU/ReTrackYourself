import React from "react";
import { useState } from "react";
import './reminder.css';

function Reminder () {
    //Sets the single remind number to divide into the Orginal start time
	const remind = localStorage.getItem("remind");
    //Gets the time set int Timer
    const time = localStorage.getItem("time")*3600;
    //Set for display time
    const [remindTime, setRemindTime] = useState(localStorage.getItem("remind")*3600);
    
    const [disable, setDisable] = useState(false);
	const [timeInterval, setTimeInterval] = useState(null);
	const [run, setRunning] = useState(false);

    let breaktime = time/remind;

	const startTimer = () => {
		setDisable(true);
		setRunning(true);
		setTimeInterval(
			setInterval(() => {
                if(remind === breaktime){
                    pauseTimer();
                }
				else {
                    setRemindTime((prev) => prev - 1);
                }
			}, 1000)
		);
	};

	const pauseTimer = () => {
		if (run) {
			clearInterval(timeInterval);
			setRunning(false);
		} else {
			startTimer();
		}
	};

	
    return (
		<div className="App">
			<div>
				<div className="remindBackground">
					<p className="remind">
						Time: {`${Math.floor(remindTime / 3600)}`.padStart(2, 0)}:
						{`${Math.floor((remindTime % 3600) / 60)}`.padStart(2, 0)}:
						{`${remindTime % 60}`.padStart(2, 0)}
					</p>
				</div>
				<div className="ButtonRow">
					<button
						className="setRemindButton"
						disabled={disable}
						onClick={() => startTimer()}>
						Start
					</button>
                    <button onClick={() => pauseTimer()}></button>
				</div>
			</div>
		</div>
	);
}

export default Reminder;

