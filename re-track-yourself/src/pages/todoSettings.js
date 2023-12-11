
import React from "react";
import { Link } from "react-router-dom";
import '../App.css'


class Home extends React.Component {

	openTodoWindow = () => {
		window.electron.openTodoWindow();
	};

	render() {
		return (
			<div className="App">

				<div className="Body">
					<div className="Widgets">
						<Link className="Timer" to='/timer'>Timer</Link>
						<Link className="Todo" to='/todo'>To-Do</Link>
						<Link className="Reminder" to='/reminder'>Reminder</Link>
					</div>
					<div>
						<div className="Information">
							<p>The To-Do list allows you to write down tasks that you have to complete</p>
						</div>
						<div className="Settings">

							<button className="addButton" onClick={this.openTodoWindow}>
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
