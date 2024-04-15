import React from "react";
import { LinearProgress } from "@mui/material";
import "./reminder.css";

function BreakTimeModal() {
	const [progress, setProgress] = React.useState(0);
	const MIN = 0;
	const MAX = 40;

	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) =>
				prevProgress >= MAX ? MIN : prevProgress + 1
			);
		}, 15000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="breakText">
			<h1>Its time to take a break!</h1>
			Get up for 5 - 10 Mins, don't forget to grab a glass of water if you need
			it,
			<p>You have done great so far!</p>
			<LinearProgress
				variant="determinate"
				className="timerBar"
				value={progress}
			/>
		</div>
	);
}

export default BreakTimeModal;
