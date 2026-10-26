import fetchPosts from "../api/fetchPosts";

const resource = fetchPosts(
  "https://jsonplaceholder.typicode.com/posts?_limit=5",
); // returns a promise

// if we throw promise suspense will show data. if we throw error error boundary will show fallback
// suspense is used to handle loading state
// if data is shown then suspense will render the actual jsx
export default function PostSelector({ onSelectPost }) {
  const posts = resource.read(); //we are figuring out the promise situation here.

  return (
    <div>
      <select onChange={onSelectPost}>
        <option value="">Select Post</option>
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    </div>
  );
}
