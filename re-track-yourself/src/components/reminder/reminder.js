import React from "react";
import './reminder.css';

class Reminder extends React.Component {
	
	render() {
		return (
			<div className="App">
                <div>
                    <p>Time Remaining until break:
                        <p id="time"></p> 
                    </p>
                    <button>Start Next Break</button>
                </div>
			</div>
		);
	}
}

export default Reminder;

