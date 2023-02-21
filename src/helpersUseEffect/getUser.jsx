const users = [
  {
    id: 1,
    name: "Jose",
    email: "email@email.com",
  },
  {
    id: 2,
    name: "Maria",
    email: "email2@email.com",
  },
];

async function GetUser() {

  const userId = Math.floor(Math.random() * 10) + 1;

  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const res = await fetch(url);
  const user = await res.json();

  return user;
}

export default GetUser;
