import { useState } from "react"


let init =() =>{
  return Math.random()
}

export default function Count(){

//   - Used a lazy initializer function `init` to set the initial state.
// - Ensures Math.random() runs only once during the first render.
// - Implemented count update logic with setCount.
// - Demonstrates best practice for expensive or computed initial state values.

  let [count , setCount] = useState(init)

  let update = ()=>{
    return setCount(count+1)
  }

  return(
    <div>
        <h1>{count}</h1>
        <button onClick={update}>Click Me</button>
    </div>
  )
}