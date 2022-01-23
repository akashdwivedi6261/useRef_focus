import "./styles.css";
import React, { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="App">
      <h1>useRef Input Focus</h1>
      <input placeholder="type somethimg" ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}
