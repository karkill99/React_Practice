import { useState } from "react";
import Themechanger from "./components/Themechanger";
import Counter from "./components/Counter";
import Jokes from "./components/Jokes";
import Image from "./components/Image";

function App() {
  const [count, setCount] = useState(0)

  function handleIncreament() {
    setCount(count+1)
    // console.log("clicked")
  }
  function handleDecreament() {
    setCount(count-1)
    // console.log("clicked")
  }
  return (
    <div className="App">
      <h1>This is react application</h1>
      <h1>{count}</h1>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button><br/><br/>
      <div>
        <label>Username</label>
        <input placeholder="UserName"></input><br/>
        <label>Password</label>
        <input placeholder="Password"></input>
      </div>
      <Themechanger />
      <Counter/>
      <Jokes/>
      <Image/>
    </div>
  );
}

export default App;
