import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <h1>{props.topicTitle}</h1>
    </div>
  );
};

export default TopicListItem;
