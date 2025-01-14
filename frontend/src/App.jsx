import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
// import photos from 'mocks/photos';
// import topics from 'mocks/topics';




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

  // We have used favoritedPhotos array global state which we pass down as prop to all components to keep track of user favorites, initialized to be empty array
  // const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  // Defining a state to open new Modal when user clicks on photo
  // Second state to track selected photo
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  // const toggleFavorite = (photoId) => {
  //   setFavoritedPhotos((prevFavorites) => {
  //     return prevFavorites.includes(photoId)
  //       ? prevFavorites.filter(id => id !== photoId) // Remove photoId if already favorited using array filter function where we are making a new array of photos whose photoId is not same as photoId of photo we are checking 
  //       : [...prevFavorites, photoId]; // Add if not favorited
  //   });
  // };

  // console.log('Favorited Photos:', favoritedPhotos); // to check photos added to favoritedPhotos Array we will see photoIds here 

  // Helper function to manage modal open logic
  // const openModal = (photo) => {
  //   setSelectedPhoto(photo);
  //   setIsModalOpen(true);
  // }

  // const closeModal = () => {
  //   setSelectedPhoto(null);
  //   setIsModalOpen(false);
  // }

  // Separation of concerns separated state management logic from 
  // rendering logic using useApplicationData logic
  const {
    state: { favoritedPhotos, isModalOpen, selectedPhoto, photoData, topicData },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic
  } = useApplicationData();

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
        photos={photoData}
        topics={topicData}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={updateToFavPhotoIds}
        openModal={setPhotoSelected}
        onTopicClick={fetchPhotosByTopic}
      />
      {/*Conditionally rendering the modal */}
      {isModalOpen && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          closeModal={onClosePhotoDetailsModal}
          favoritedPhotos={favoritedPhotos}
          isFavorited={favoritedPhotos.length > 0}
          toggleFavorite={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
