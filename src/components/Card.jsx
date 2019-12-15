import React, { useState, useEffect } from "react";
import { word_bank } from "./data/word_bank";

export default function Card({ children }) {
	const [displayWord, setDisplayWord] = useState("");

	useEffect(() => {
		let randomWord = word_bank[Math.floor(Math.random() * word_bank.length)];

		setDisplayWord(randomWord);

		// return () => {
		//     cleanup
		// };
	}, []);

	return (
		<div>
			<h1>{displayWord}</h1>
		</div>
	);
}
