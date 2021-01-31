import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { selectTopic } from "../redux/actions";


const TOPIC_OPTIONS = [
  {
    key: 'reactjs',
    text: 'React JS',
    value: 'reactjs',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'backend',
    text: 'BackEnd development',
    value: 'backend',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'frontend',
    text: 'Frontend development',
    value: 'frontend',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Java',
    text: 'Java development',
    value: 'java',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
  },
];

function TopicList() {
  const dispatch = useDispatch();
  const selectedTopic = useSelector(state => state.selectedTopic);

  const onSelectTopic = (event, { value }) => dispatch(selectTopic(value));

  return (
    <div style={{ marginBottom: 24 }}>
      <Dropdown
        placeholder='Select Friend'
        onChange={onSelectTopic}
        value={selectedTopic}
        fluid
        selection
        options={TOPIC_OPTIONS}
      />
    </div>
  );
}

export default TopicList;
