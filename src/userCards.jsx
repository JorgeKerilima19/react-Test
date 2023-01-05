export function User({
  name = "user",
  cashAmount = 0,
  address = {},
  cardsPoints = [],
}) {
  function totalPoints(array) {
    let points = 0;
    for (let i = 0; i < array.length; i++) {
      points = points + array[i];
    }
    return points;
  }
  return (
    <>
      <h1>Welcome Back {name}!</h1>
      <h3>
        Your total <strong>cash</strong> is {cashAmount}
      </h3>
      <h3>
        Your card is <strong>registered at</strong> {address.city}{" "}
        {address.street}
      </h3>
      <h3>Total points {totalPoints(cardsPoints)}</h3>
    </>
  );
}
