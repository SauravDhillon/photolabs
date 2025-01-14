import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

// const sampleDataForTopicList = [
//   {
//     id: "1",
//     slug: "topic-1",
//     title: "Nature",
//   },
//   {
//     id: "2",
//     slug: "topic-2",
//     title: "Travel",
//   },
//   {
//     id: "3",
//     slug: "topic-3",
//     title: "People",
//   },
// ];

const TopicList = ({ topics, onTopicClick }) => {
  return (
    <nav className="top-nav-bar__topic-list">
      {/* {sampleDataForTopicList.map((topic) => {
        return <TopicListItem key={topic.id} topicTitle={topic.title} />
      })} */}
      {topics.map((topic) => {
        return <TopicListItem
          key={topic.id}
          topicId={topic.id}
          topicTitle={topic.title}
          onTopicClick={onTopicClick}
        />
      })}
    </nav>
  );
};

export default TopicList;
