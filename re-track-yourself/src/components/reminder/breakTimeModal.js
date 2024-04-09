import React from "react";
import { LinearProgress } from "@mui/material";

function BreakTimeModal() {
	const [progress, setProgress] = React.useState(0);
	const MIN = 0;
	const MAX = 600;

	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) =>
				prevProgress >= MAX ? MIN : prevProgress + 1
			);
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="breakText">
			<p>
				Its time to take a break!
				Get up for 5 - 10 Mins and walk around You
				have done great so far!
			</p>
			<LinearProgress
				variant="determinate"
				className="timerBar"
				value={progress}
			/>
		</div>
	);
}

export default BreakTimeModal;
