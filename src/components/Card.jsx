import React, { useState } from "react";
import "./Card.css";
import { word_bank } from "./data/word_bank";

export default function Card(props) {
	const { word } = props;
	const [fetchedWord, setFetchedWord] = useState(word);
	const [selected, setSelected] = useState(false);

	const fetchNewWord = () => {
		let randomWord = word_bank[Math.floor(Math.random() * word_bank.length)];
		setFetchedWord(randomWord);
	};

	const onSelected = () => {
		setSelected(!selected);
	};

	let selectedCard = selected ? "green--bkg" : "";

	return (
		<>
			<article onClick={onSelected} className={`card ${selectedCard}`}>
				<div className="word">{fetchedWord}</div>
				<div className="">
					<button className="btn_reload" onClick={() => fetchNewWord()}>
						Reload
					</button>
				</div>
			</article>
		</>
	);
}
