import React, { useState } from "react";

export function MathButton() {
  const [value, setValue] = useState(0);
  return (
    <>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Sum
      </button>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Subtract
      </button>
      <button
        onClick={() => {
          setValue(10);
        }}
      >
        Restart
      </button>
    </>
  );
}
