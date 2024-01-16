
import React from "react";
import { Link } from "react-router-dom";
import '../App.css'


class Home extends React.Component {
	openTimerWindow = () => {
		window.electron.openTimerWindow();
	};

	render() {
		return (
			<div className="App">
				
				<div className="Body">
					<div className="Header"> </div>
					<div className="Widgets">
						<Link className="widgetButton" to='/'>Home</Link>
						<Link className="widgetButton" to='/todo'>To-Do</Link>
						<Link className="widgetButton" to='/reminder'>Reminder</Link>
					</div>
					<div>
						<div className="Information">
							<p>The Timer allows you to set a countdown timer for your alloted study time</p>
						</div>

						<div className="Settings">
						<p>How long are you planning to study for?</p>
							<div className="sliderSettings">
								<input type="range" list="markers" min='1' max='6'/>

								<datalist id="markers">
									<option value="1" label = '1 Hour'></option>
									<option value="2" label = '2 Hours'></option>
									<option value="3" label = '3 Hours'></option>
									<option value="4" label = '4 Hours'></option>
									<option value="5" label = '5 Hours'></option>
									<option value="6" label = '6 Hours'></option>
								</datalist>	
							</div>
							<button className="setButton">Set Time:</button>

							<button className="addButton" onClick={this.openTimerWindow}>
								Add
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
