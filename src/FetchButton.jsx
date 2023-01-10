export function FetchButton() {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data)).catch(error=>console.log(error));
      }}
    >
      Display data
    </button>
  );
}