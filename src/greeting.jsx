export function Greeting({nickName="no Nick name", name}) {
  const user = {
    name: name,
    lastName: "Quispe",
    age: 21,
    married: false,
  };
  function older(age, years) {
    return age + years;
  }
  return (
    <section>
      <h1>Hello World</h1>
      <p>
        Hello {user.name} {user.lastName} or {nickName}
      </p>
      <h3>You are: {user.married ? "married 😅" : "single 😂"}</h3>
      <h2>
        Hopefully you can come back in 5 years when you are {older(user.age, 5)}
      </h2>
    </section>
  );
}
