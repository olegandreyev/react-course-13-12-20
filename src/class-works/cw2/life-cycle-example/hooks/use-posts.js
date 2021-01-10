import { useState, useEffect } from 'react';


export default function usePosts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        setLoading(false);
        setPosts(posts);
      })
  }, []);

  return [posts, loading];
}
