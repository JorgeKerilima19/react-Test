export function User({
  name = "user",
  cashAmount = 0,
  address = {},
  cardsPoints = [],
}) {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}
