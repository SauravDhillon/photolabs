import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';



// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = [
  //   { ...sampleDataForPhotoListItem, id: "1"},
  //   { ...sampleDataForPhotoListItem, id: "2"},
  //   { ...sampleDataForPhotoListItem, id: "3"},
  // ];

  // const sampleDataForTopicListItem = {
  //   id: "1",
  //   slug: "topic-1",
  //   label: "Nature",
  // };

  return (
    <div className="App">
      {/*<ul className="photo-list">
        {photos.map((photo) => (
          <PhotoListItem key={photo.id} photo={photo} />
        ))}
        </ul> 
        <TopicListItem label={sampleDataForTopicListItem.label} />
        <TopicList />
        */}
        <TopNavigationBar />
        <PhotoList />
    </div>
  );
};

export default App;
