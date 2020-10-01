import React, { FC } from "react";
import "./App.css";
import TextField from "./components/TextField";
import { ReducerExample } from "./components/Reducer";
import Counter from "./components/Counter";

const App: FC = () => {
	return (
		<div className="App">
			<TextField name="hey" handleChange={(e) => e}></TextField>
			<ReducerExample></ReducerExample>
			<Counter>
				{(count, setCount) => (
					<div>
						{count} <button onClick={() => setCount(count + 1)}></button>{" "}
					</div>
				)}
			</Counter>

		</div>
	);
};

export default App;
