import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  return (
    <section>
      <h1>Hello World</h1>
      <p>Hola Xd</p>
    </section>
  );
}

root.render(
  <div>
    <Greeting />
  </div>
);
