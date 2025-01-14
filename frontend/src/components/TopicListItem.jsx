import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = ({ topicId, topicTitle, onTopicClick }) => {
  return (
    <div className="topic-list__item"
      onClick={() => onTopicClick(topicId)} // Trigger the function on click
    >
      <p>{topicTitle}</p>
    </div>
  );
};

export default TopicListItem;
