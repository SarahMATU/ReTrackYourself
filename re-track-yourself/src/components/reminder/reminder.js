import React, { useEffect } from "react";
import { useState } from "react";
import "./reminder.css";

function Reminder() {
	let timeBreak = false;
	localStorage.setItem("break", false);

	const openBreakWindow = () => {
		window.electron.openBreakWindow();
	};
	//Sets the text of the Button
	const [btn, setBtn] = useState("Pause");
	//Sets the single remind number to divide into the Orginal start time
	const remind = localStorage.getItem("remind");
	//Gets the time set in Timer
	const time = localStorage.getItem("time") * 3600;
	//Set for display time
	const [remindTime, setRemindTime] = useState(
		localStorage.getItem("remind") * 10
		//3600
	);

	//Used for the countdown function
	const [disable, setDisable] = useState(false);
	const [timeInterval, setTimeInterval] = useState(null);
	const [run, setRunning] = useState(false);
	const breakTime = time / remind;


	useEffect(() => {
		setRemindTime(breakTime);
	}, [breakTime]);

	const startTimer = () => {
		setDisable(true);
		setRunning(true);
		setTimeInterval(
			setInterval(() => {
				setRemindTime((prev) => prev - 1);
			}, 1000)
		);
	};

	const pauseTimer = () => {
		if (run) {
			setBtn("Resume");
			clearInterval(timeInterval);
			setRunning(false);
		} else {
			setBtn("Pause");
			startTimer();
		}
	};

	const toggleBreak = () => {
		localStorage.setItem("break", true);
		//console.log(localStorage.getItem("break"));
		timeBreak = true;
		openBreakWindow();
		timeBreak = false;
	};

	if (remindTime <= 0) {
		toggleBreak();
		clearInterval(timeInterval);
		setRunning(false);
		setRemindTime(breakTime);
	}

	return (
		<div className="App">
			<div>
				<div className="remindBackground">
					<p className="remind">
						Time: {`${Math.floor(remindTime / 3600)}`.padStart(2, 0)}:
						{`${Math.floor((remindTime % 3600) / 60)}`.padStart(2, 0)}:
						{`${Math.trunc(remindTime % 60)}`.padStart(2, 0)}
					</p>
				</div>
				<div className="ButtonRow">
					<button
						className="setRemindButton"
						disabled={disable}
						onClick={() => startTimer()}
					>
						Start
					</button>
					<button className="setRemindButton" onClick={() => pauseTimer()}>
						{btn}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Reminder;
