import React from "react";
import GetPost from "./helpersUseEffect/getPost";
import GetUser from "./helpersUseEffect/getUser";

function DisplayInfo() {
  return (
    <>
      <GetPost />
      <GetUser />
    </>
  );
}

export default DisplayInfo;
