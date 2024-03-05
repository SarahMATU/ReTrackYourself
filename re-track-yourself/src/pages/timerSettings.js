import React from "react";
import { Link } from "react-router-dom";
import { Slider } from "@mui/material";
import "../App.css";

class TimerOption extends React.Component {

	openTimerWindow() {
		window.electron.openTimerWindow();
	}

	constructor() {
		super();
		this.state = {
			time: 3,
		};
		this.setTime = this.setTime.bind(this);
		this.handleSlideChange = this.handleSlideChange.bind(this);
	}

	handleSlideChange(event) {
		this.setState({ time: event.target.value });
	}

	setTime() {
		const setTime = this.state.time;
		alert("Setting: " + setTime + " to the timer")
		localStorage.setItem("time", setTime)
		console.log(localStorage.getItem("time"));
	}

	render() {
		return (
			<div className="App">
				<div className="Body">
					<div className="Widgets">
						<Link className="widgetButton" to="/">
							Home
						</Link>
						<Link className="widgetButton" to="/todoOption">
							To-Do
						</Link>
						<Link className="widgetButton" to="/reminderOption">
							Reminder
						</Link>
					</div>

					<div className="InfoSettings">
						<div className="Information">
							<p>
								The Timer allows you to set a countdown timer for your alloted
								study time
							</p>
						</div>

						<div className="Settings">
							<p>How long are you planning to study for?</p>
							<div className="sliderSettings">
								<Slider
									defaultValue={1}
									step={1}
									min={1}
									max={6}
									marks
									onChange={this.handleSlideChange}
									value={this.state.time}
									valueLabelDisplay="auto"
								/>
							</div>
							<button className="showButton" onClick={this.setTime}>
								{"Hours: " + this.state.time}
							</button>
							<button className="addButton" onClick={this.openTimerWindow}>
								Add Timer Widget
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TimerOption;
