import { useState } from 'react';

export default function InputComponent() {
	const [inputText, setText] = useState('');

	function handleChange(e) {
		setText(e.target.value);
	}

	return (
		<>
			<input value={inputText} onChange={handleChange} />
			<p>You typed: {inputText}</p>
			<button onClick={() => setText('')}>Reset</button>
		</>
	);
}
