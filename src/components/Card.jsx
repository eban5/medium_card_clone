import React from "react";
import "./Card.css";

export default function Card(props) {
	const { idx, word } = props;
	return (
		<button className="card" key={idx}>
			{word}
		</button>
	);
}
