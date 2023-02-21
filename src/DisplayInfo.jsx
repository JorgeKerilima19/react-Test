import React from "react";
import GetPost from "./helpersUseEffect/getPost";
import GetUser from "./helpersUseEffect/getUser";
import { useEffect, useState } from "react";

const initialUser = {
  id: 1,
  name: "Jose",
  email: "email@mail.com",
};

function DisplayInfo() {
  const [user, setUser] = useState(initialUser);

  function updateUser() {
    GetUser().then((newUser) => {
      setUser(newUser);
    });
  }

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <>
      <div>
        <h2>{user.id}</h2>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
      </div>
    </>
  );
}

export default DisplayInfo;
