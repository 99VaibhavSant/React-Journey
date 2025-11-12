import { useState } from "react";

export default function count() {

// feat: demonstrate functional state updates in React using useState

// - Added a counter component that increments the count twice per click.
// - Used the functional form of setCount to ensure each update gets the latest state.
// - Example shows how React batches state updates and why using (currCount) => currCount + 1 is safer than direct count + 1.

  let [count, setCount] = useState(0);

  let update = () => {
    setCount((currcount) => {
      return currcount + 1;
    });

    setCount((currcount) => {
      return currcount + 1;
    });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={update}>Click Me</button>
    </div>
  );
}
