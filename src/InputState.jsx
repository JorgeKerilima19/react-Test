import React, { useState } from "react";

export function InputState() {
  const [message, setMessage] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={()=>alert("You say: "+ message)}>Save</button>
    </>
  );
}
