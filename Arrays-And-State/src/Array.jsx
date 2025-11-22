import { useState } from "react";

function Array() {
  // useState initializes the state variable "arr" with default value [1]
  // setArr is the function used to update the state
  let [arr, setArr] = useState([1]);

  // This function runs when the button is clicked
  // We use the callback form of setArr to get the previous state (premoves)
  // Then we return a NEW array by spreading the old values and adding "2" at the end
  let add = () => {
    setArr((premoves) => {
      return [...premoves, 2]; // immutably adding new value to the array
    });
  };

  return (
    <div>
      {/* React converts array to string when rendering, showing like: 1,2,2,... */}
      <h1>{arr}</h1>

      {/* On click, the "add" function updates the array */}
      <button onClick={add}>Update Array</button>
    </div>
  );
}

export default Array;
