import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Card />
				<div className="small_text">
					<p>Refresh the page to draw a new card</p>
				</div>
			</header>
		</div>
	);
}

export default App;
