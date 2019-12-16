import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Hand.css";
import { word_bank } from "./data/word_bank";

export default function Hand({ children }) {
	const [playerHand, setPlayerHand] = useState([]);

	useEffect(() => {
		// loop 6 times
		// each time, get a random word, pass as props to Card, add to HandArray
		let cards = [];

		for (let i = 1; i <= 6; i++) {
			let randomWord = word_bank[Math.floor(Math.random() * word_bank.length)];
			cards.push(<Card key={i} word={randomWord} className="card" />);
		}

		// set hand array
		setPlayerHand(cards);
	}, []);

	return (
		<div className="centered">
			<section className="cards">{playerHand}</section>
		</div>
	);
}
