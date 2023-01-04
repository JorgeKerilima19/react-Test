import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const name="Jorge";
  const age=21;
  const married=true
  return (
    <section>
      <h1>Hello {name}</h1>
      <p>5 years ago you were {age - 5}</p>
      <p>you are: {married? "married":"single"}</p>
    </section>
  );
}

root.render(
  <div>
    <Greeting />
  </div>
);
