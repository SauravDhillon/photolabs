import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = [
    { ...sampleDataForPhotoListItem, id: "1"},
    { ...sampleDataForPhotoListItem, id: "2"},
    { ...sampleDataForPhotoListItem, id: "3"},
  ];
  return (
    <div className="App">
      <ul className="photo-list">
        {photos.map((photo) => (
          <PhotoListItem key={photo.id} photo={photo} />
        ))}
        </ul>
    </div>
  );
};

export default App;
