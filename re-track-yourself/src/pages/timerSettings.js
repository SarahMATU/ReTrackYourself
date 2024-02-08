
import React from "react";
import { Link } from "react-router-dom";
import Timer from "../components/timer/timer";
import '../App.css';
import { Slider } from "@mui/material";

class TimerOption extends React.Component {

	openTimerWindow()  {
		window.electron.openTimerWindow();
	};

	constructor() {
		super();
		this.state = {
			time: '1'
		}
		this.handleSlideChange = this.handleSlideChange.bind(this)
	}

	handleSlideChange(event) {
		this.setState({time: event.target.value})
	}
	
	render() {
		return (
			<div className="App">
				
				<div className="Body">
					<div className="Widgets">
						<Link className="widgetButton" to='/'>Home</Link>
						<Link className="widgetButton" to='/todoOption'>To-Do</Link>
						<Link className="widgetButton" to='/reminderOption'>Reminder</Link>
					</div>
	
					<div className="InfoSettings">
						<div className="Information">
							<p>The Timer allows you to set a countdown timer for your alloted study time</p>
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
  								valueLabelDisplay="auto"/>
							</div>
							<button className="setButton">{this.state.time + " Hour/s"}</button>
							<button className="addButton" onClick={this.openTimerWindow}>Add</button>
						</div>
					</div>
				</div>
				<Timer time = {this.state.time}/>
			</div>
		);
	}
}

export default TimerOption;