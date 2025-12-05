import { useState } from "react";
import "./App.css";

function App() {
  // Step 1: Create a state variable called "count"
  // Initial value is 0
  // setCount() will be used to update the "count" value on screen
  const [count, setCount] = useState(0);

  // Step 2: Create a function that updates the count
  // numVal is a number passed by the button (here it will be 2)
  let updatecount = (numVal) => {
    // Step 3: Update the state using the previous value (pre)
    // This ensures state updates correctly even if React batches updates
    // Formula: new count = previous count + numVal + 1
    // If numVal = 2 → count increases by 3
    setCount((pre) => pre + numVal + 0);
  };

  return (
    <>
      {/* Step 4: Display the current value of "count" */}
      <h1>{count}</h1>

      {/* Step 5: Button triggers updatecount(2) when clicked */}
      {/* This means numVal = 2 gets passed into updatecount */}
      <button onClick={() => updatecount(5)}>Click it</button>
    </>
  );
}

export default App;
