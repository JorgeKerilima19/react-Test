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

function GetUser() {
  return (
    <div>
      <ul style={{ color: "red", listStyle: "none" }}>
        {users.map((user) => {
          return (
            <li>
              <h2>
                {user.id} : {user.name}
              </h2>
              <h4>{user.email}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GetUser;
