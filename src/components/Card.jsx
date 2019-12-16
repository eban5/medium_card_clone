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
			<article className="card">
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
