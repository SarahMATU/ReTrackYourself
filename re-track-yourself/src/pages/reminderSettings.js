import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Slider } from "@mui/material";

class ReminderOption extends React.Component {
	openReminderWindow = () => {
		window.electron.openReminderWindow();
	};

	constructor() {
		super();
		this.state = {
			times: "3",
		};
		this.handleSlideChange = this.handleSlideChange.bind(this);
	}

	handleSlideChange(event) {
		this.setState({ times: event.target.value });
	}

	render() {
		return (
			<div className="App">
				<div className="Body">
					<div className="Widgets">
						<Link className="widgetButton" to="/">
							Home
						</Link>
						<Link className="widgetButton" to="/timerOption">
							Timer
						</Link>
						<Link className="widgetButton" to="/todoOption">
							To-Do
						</Link>
					</div>

					<div className="InfoSettings">
						<div className="Information">
							<p>
								The Reminder sets an alert for you to get up and step away from
								the computer
							</p>
						</div>

						<div className="Settings">
							<p>How many times do you want the reminder to go off?</p>
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
							<button className="showButton">
								{this.state.times + " Time/s"}
							</button>
							<button className="addButton" onClick={this.openReminderWindow}>
								Add
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ReminderOption;
