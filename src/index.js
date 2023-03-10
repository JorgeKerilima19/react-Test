import React from "react";
import ReactDOM from "react-dom/client";
// import { Greeting } from "./greeting";
// import { User } from "./userCards";
// import { Button } from "./Button";
// import { StyleLine } from "./LineStyle";
// import { ImportCss } from "./ImportStyle";
// import { FetchButton } from "./FetchButton";
// import { MathButton } from "./MathButton";
// import { InputState } from "./InputState";
// import { InputEffect } from "./UseEffectButton";
// import UseEffectTest from "./UseEffectTest";

import DisplayInfo from "./DisplayInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Greeting nickName="George" name="Jorge" />
    <Greeting /> */}
    {/* <User
      name="Pol"
      cashAmount={5000}
      address={{ city: "New York", street: "Some 2014" }}
      cardsPoints={[10, 20, 45.2, 4]}
    />
    <Button text="I do nothing" />
    <Button text="" name="Frank" />
    <StyleLine />
    <ImportCss task={true} />
    <Button text="Click Me" />
    <FetchButton />
    <MathButton />
    <InputState />
    <InputEffect /> */}
    {/* <UseEffectTest /> */}
    <DisplayInfo />
  </>
);
