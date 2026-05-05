import { useRef } from "react";
import { useState } from "react";


function App() {
  const [data, setData] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setData(json));

  return (
    <div className="App">
      <h1>Lab Practical</h1>
      <div className="posts">
        {data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;