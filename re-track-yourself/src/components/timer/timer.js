import React from "react";
import "./timer.css";

function Timer(props) {

	let countTime = 0;

	const getTime = (countTime) => {
		window.electron.getTime('get-time', (event, countTime) => {
			console.log("Received current time in Timer.js:", countTime);
		});
	};

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

	console.log("Component Did Mount timer:", countTime);

	return (
		<div className="App">
			<div>
				<div className="textBackground">
					<p>
						Time Remaining :<span>{countTime}</span>
					</p>
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
					<button className="setButton" onClick={() => getTime()}>
						GetTime
					</button>
				</div>
			</div>
		</div>
	);
}

export default Timer;
