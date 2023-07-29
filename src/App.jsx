import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice";
//useSelector is used to read data from the store, and useDispatch is used to dispatch actions in the reducer
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  useSelector((state) => console.log(state));
  const [value, setValue] = useState(count);

  const dispatch = useDispatch();

  const incrementValue = () => {
    setValue((value) => value + 1);
    dispatch(increment());
  };

  const decrementValue = () => {
    setValue((value) => value - 1);
    dispatch(decrement());
  };

  const incrementByValue = () => {
    setValue((value) => (value += 2));
    dispatch(incrementByAmount(2));
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementValue}>Increment</button>
        <button onClick={incrementByValue}>Increment by 2</button>

        <h2>{value}</h2>
        <button onClick={decrementValue}>Decrement</button>
      </div>
    </>
  );
}

export default App;
