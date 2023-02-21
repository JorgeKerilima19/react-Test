import React from "react";
import getPosts from "./helpersUseEffect/getPost";
import getUser from "./helpersUseEffect/getUser";
import { useEffect, useState } from "react";

function DisplayInfo() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  function updateUser() {
    getUser().then((newUser) => {
      setUser(newUser);
    });
  }

  function updatePosts(userId) {
    getPosts(userId).then((newPosts) => {
      setPosts(newPosts);
    });
  }
  useEffect(() => {
    if (user) {
      updateUser();
    }
  }, []);
  useEffect(() => {
    updatePosts(user.id);
  }, [user]);

  return (
    <>
      <button onClick={updateUser}>Display new user</button>
      <div>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
      </div>
      <div>
        <h2>User {user.id}- Posts</h2>
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default DisplayInfo;
