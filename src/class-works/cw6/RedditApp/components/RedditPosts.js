import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByTopic } from "../redux/actions";
import { List } from "semantic-ui-react";

function RedditPosts() {
  const dispatch = useDispatch();
  const selectedTopic = useSelector(state => state.selectedTopic);
  const posts = useSelector(state => state.posts[selectedTopic] ?  state.posts[selectedTopic].list : []);

  useEffect(() => {
    if (selectedTopic) {
      dispatch(fetchPostsByTopic(selectedTopic))
    }
  }, [selectedTopic]);


  if (!selectedTopic) {
    return <div>Please select some topic</div>
  }

  return (
    <List>
      {posts.map(post =>
        <List.Item>
          <a target='_blank' href={`https://www.reddit.com/${post.subreddit_name_prefixed}`}>{post.title}</a>
        </List.Item>)
      }
    </List>
  );
}

export default RedditPosts;
