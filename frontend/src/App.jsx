import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import { useState } from 'react';



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
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavoritedPhotos((prevFavorites) => {
      prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) !== photoId)
        : [...prevFavorites, photoId];
    });
  }

  return (
    <div className="App">
      {/*<ul className="photo-list">
        {photos.map((photo) => (
          <PhotoListItem key={photo.id} photo={photo} />
        ))}
        </ul> 
        <TopicListItem label={sampleDataForTopicListItem.label} />
        <TopicList />
        <TopNavigationBar />
        <PhotoList />
        */}
      <HomeRoute
        photos={photos}
        topics={topics}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;
