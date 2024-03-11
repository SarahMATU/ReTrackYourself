import React, { useState } from "react";
import "./timer.css";

function Timer() {
	const [disable, setDisable] = useState(false);
	const [btn, setBtn] = useState("Pause");
	const [time, setTimer] = useState(localStorage.getItem("time") * 3600);
	const [timeInterval, setTimeInterval] = useState(null);
	const [run, setRunning] = useState(false);

	const startTimer = () => {
		setDisable(true);
		setRunning(true);
		setTimeInterval(
			setInterval(() => {
				setTimer((prev) => prev - 1);
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

	return (
		<div className="App">
			<div>
				<div className="timerBackground">
					<p className="timer">
						Time: {`${Math.floor(time / 3600)}`.padStart(2, 0)}:
						{`${Math.floor((time % 3600) / 60)}`.padStart(2, 0)}:
						{`${time % 60}`.padStart(2, 0)}
					</p>
				</div>

				<div className="ButtonRow">
					<button
						className="setTimeButton"
						disabled={disable}
						onClick={() => startTimer()}>
						Start
					</button>
					<button className="setTimeButton" onClick={() => pauseTimer()}>
						{btn}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Timer;
