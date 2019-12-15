import React from "react";
import "./App.css";
import Hand from "./components/Hand";

function App() {
	return (
		<div className="App">
			<Hand />
			<div className="small_text">
				<p>Refresh the page to draw a new card</p>
			</div>
		</div>
	);
}

export default App;
