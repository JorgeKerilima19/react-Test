import { useState, useEffect } from "react";
import "./card.css"

function UseEffectTest() {
  const [state, setState] = useState(true);
  const [stateToWatch, setStateTotWatch] = useState(false);

  function changeState() {
    setState((state) => !state);
  }
  useEffect(() => {
    setStateTotWatch((stateToWatch) => !stateToWatch);
    console.log(state);
  }, [state]);
  return (
    <div className={`square ${state === true ? "red" : "green"}`}>
      UseEffectTest
      <button onClick={changeState}>CLick Me</button>
      <h4 className={`${stateToWatch === false ? "blue" : "gray"}`}>This is a title</h4>
    </div>
  );
}

export default UseEffectTest;
