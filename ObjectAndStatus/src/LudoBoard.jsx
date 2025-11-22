import "./LudoBoard.css"
import { useState } from "react";

export default function LudoBoard() {

  // feat(ludo-board): implement functional state updates for blue and red moves
  //
  // - Using functional setState to update values based on previous state.
  // - Ensures React always uses the latest state even if updates are batched.
  // - Avoids stale state issues that can happen with direct object updates.
  // - Spread operator (...prevmove) keeps immutability and updates only one key.
  // - Console logs added to show previous state during update.

  let [move, setMove] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  // Old incorrect version (mutated state directly)
  // let updateBlue = () =>{
  //   move.blue = move.blue + 1  ❌ direct mutation (no re-render)
  //   setMove({...move , blue:move.blue + 1})
  // }

  // ✔ Functional state update for Blue
  let updateBlue = () =>{
    setMove((prevmove)=>{
      console.log({ prevmove , blue: prevmove.blue })
      return { ...prevmove, blue: prevmove.blue + 1 };
    });
  }

  // ✔ Functional state update for Red
  let updateRed = () =>{
    setMove((prevmove)=>{
      console.log({ prevmove , red: prevmove.red })
      return { ...prevmove, red: prevmove.red + 1 };
    });
  }

  return (
    <div className="LudoBoard">
      <h1>Ludo Board</h1>
      <div>
        <p>Blue Move = {move.blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>+1</button>

        <p>Yellow Move = {move.yellow} </p>
        <button style={{ backgroundColor: "yellow" }}>+1</button>

        <p>Green Move = {move.green} </p>
        <button style={{ backgroundColor: "green" }}>+1</button>

        <p>Red Move = {move.red} </p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
      </div>
    </div>
  );
}
