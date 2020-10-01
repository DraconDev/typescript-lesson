import React, { FC, useRef, useState } from "react";

interface TextFieldProps {
	name: string;
	ok?: boolean;
	i?: number;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// const handleChange = () => {

// }

const TextField: FC<TextFieldProps> = ({ handleChange }) => {
	const [count, setCount] = useState<number | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const divRef = useRef<HTMLDivElement>(null);
	return (
		<div>
			<input type="text" ref={inputRef} onChange={handleChange} />
			<div ref={divRef} />
		</div>
	);
};

export default TextField;
