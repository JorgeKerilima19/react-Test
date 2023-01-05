import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./greeting";
import { User } from "./userCards";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting nickName="George" name="Jorge" />
    <Greeting />
  </>
);
