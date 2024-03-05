import React from "react";
import "./timer.css";

function Timer() {

	let time = localStorage.getItem("time");

	// getTwoDigitValue = (value) => {
	// 	if (value < 10) {
	// 		return "0" + value;
	// 	}
	// 	return "" + value;
	// };

	const startTimer = () => {
		console.log("Start");
	}

	const stopTimer = () =>{
		console.log("Stop");
	}

	const onBreak = () => {
		console.log("Break");
	}

	return (
		<div className="App">
			<div>
				<div className="textBackground">
				<p>Time: {time}</p>
				</div>

				<div className="ButtonRow">
					<button className="setButton" onClick={() => startTimer()}>
						Start
					</button>
					<button className="setButton" onClick={() => stopTimer()}>
						Stop
					</button>
					<button className="setButton" onClick={() => onBreak()}>
						On Break
					</button>
				</div>
			</div>
		</div>
	);
}

export default Timer;
