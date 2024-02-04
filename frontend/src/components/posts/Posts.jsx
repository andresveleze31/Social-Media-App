import axios from "axios";
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

function Posts() {
  //TEMPORARY
  const [posts, setPosts] = useState();
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const { data } = await axios.get("http://localhost:8800/api/post", {
        withCredentials: true
      });
      console.log(data);
      setPosts(data)
      setWaiting(false);
    }
    getPosts();
  }, []);

  return (
    <div className="posts">
      {waiting
        ? "Waiting..."
        : posts.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}

export default Posts;
