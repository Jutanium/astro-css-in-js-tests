
import { StyleRegistry } from "solid-styled";
import Counter from "./Counter";

export default function App() {
  return <StyleRegistry>
    <Counter>inside</Counter>
  </StyleRegistry>
}