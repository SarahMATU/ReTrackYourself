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
			times: 3,
		};
		this.setTimes = this.setTimes.bind(this);
		this.handleSlideChange = this.handleSlideChange.bind(this);
	}

	handleSlideChange(event) {
		this.setState({ times: event.target.value });
	}

	setTimes() {
		const setTimes = this.state.times;
		alert("Setting: " + setTimes + " Reminders");
		localStorage.setItem("remind", setTimes);
		console.log(localStorage.getItem("remind"));
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
							<p>
								How many times do you want the reminder to go off? Simply set
								the time on the slider and click the Times Button.
							</p>
							<div className="sliderSettings">
								<Slider
									defaultValue={1}
									step={1}
									min={2}
									max={7}
									marks
									onChange={this.handleSlideChange}
									value={this.state.times}
									valueLabelDisplay="auto"
								/>
							</div>
							<button className="showButton" onClick={this.setTimes}>
								{"Times: " + this.state.times}
							</button>
							<button className="addButton" onClick={this.openReminderWindow}>
								Add Reminders
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ReminderOption;
