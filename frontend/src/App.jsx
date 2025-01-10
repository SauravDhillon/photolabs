import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';



// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = [
  //   { ...sampleDataForPhotoListItem, id: "1"},
  //   { ...sampleDataForPhotoListItem, id: "2"},
  //   { ...sampleDataForPhotoListItem, id: "3"},
  // ];
  return (
    <div className="App">
      {/*<ul className="photo-list">
        {photos.map((photo) => (
          <PhotoListItem key={photo.id} photo={photo} />
        ))}
        </ul> */}
        <PhotoList />
    </div>
  );
};

export default App;
