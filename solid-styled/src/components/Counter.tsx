import { createSignal, JSX, ParentProps} from "solid-js";
import { css } from "solid-styled"

export default function Counter(props: ParentProps) {
	const [count, setCount] = createSignal(0);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

  css`
    button {
      color: red
    }
  `

	return (
		<>
			<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			<div>{props.children}</div>
		</>
	);
}


