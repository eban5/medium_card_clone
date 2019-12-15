import React, { useState } from "react";
import "./Card.css";
import { word_bank } from "./data/word_bank";

export default function Card(props) {
	const { idx, word, onClick } = props;
	const [fetchedWord, setFetchedWord] = useState(word);

	const fetchNewWord = () => {
		let randomWord = word_bank[Math.floor(Math.random() * word_bank.length)];
		setFetchedWord(randomWord);
	};

	return (
		<>
			<a href={"#target"} className="card" key={idx} onClick={onClick}>
				<span>{fetchedWord}</span>
			</a>

			<button onClick={() => fetchNewWord()}>Reload</button>
		</>
	);
}
