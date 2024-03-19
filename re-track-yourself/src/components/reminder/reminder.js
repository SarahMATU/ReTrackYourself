import React from "react";
import { useState } from "react";
import './reminder.css';

function Reminder () {

	const openBreakWindow = () => {
		window.electron.openBreakWindow();
	};

    //Sets the single remind number to divide into the Orginal start time
	const remind = localStorage.getItem("remind");
    //Gets the time set int Timer
    const time = localStorage.getItem("time")*3600;
    //Set for display time
    const [remindTime, setRemindTime] = useState(localStorage.getItem("remind")*3600);
    
	const [timeBreak, setBreakTime] = useState(false);
	//Used for the countdpwn function
    const [disable, setDisable] = useState(false);
	const [timeInterval, setTimeInterval] = useState(null);
	const [run, setRunning] = useState(false);

	const breakTime = time/remind;
    
	const startTimer = () => {
		setRemindTime(breakTime)
		setDisable(true);
		setRunning(true);
		setTimeInterval(
			setInterval(() => {
                if(remind === breakTime){
                    pauseTimer();
                } else if(remind === 0){
					toggleBreak();
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

	const toggleBreak = () => {
		setBreakTime(true);
	}

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
					<button className="setRemindButton" onClick={() => toggleBreak()}>Open</button>
					{timeBreak && openBreakWindow()}
				</div>
			</div>
		</div>
	);
}

export default Reminder;

