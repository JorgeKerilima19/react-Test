async function getPosts(userId) {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const res = await fetch(url);
  const posts = await res.json();
  console.log(posts)
  return posts;
}

export default getPosts;
