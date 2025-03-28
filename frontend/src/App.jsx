import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';
// import photos from 'mocks/photos';
// import topics from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Below example is using passing default props for photos instead of mock data imported above
  
  /*const photos = [
    { ...sampleDataForPhotoListItem, id: "1"},
    { ...sampleDataForPhotoListItem, id: "2"},
    { ...sampleDataForPhotoListItem, id: "3"},
  ];
  const sampleDataForTopicListItem = {
    id: "1",
    slug: "topic-1",
    label: "Nature",
  };  */
  // We have used favoritedPhotos array global state which we pass down as prop to all components to keep track of user favorites, initialized to be empty array as user clicks on any photo its photoID will be added to this array
  // const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  // Logic to manage favoritedPhotos state when user clicks on photofavbutton child component
 
  /*const toggleFavorite = (photoId) => {
    setFavoritedPhotos((prevFavorites) => {
      return prevFavorites.includes(photoId)
        ? prevFavorites.filter(id => id !== photoId) // Remove photoId if already favorited using array filter function where we are making a new array of photos whose photoId is not same as photoId of photo we are checking 
        : [...prevFavorites, photoId]; // Add if not favorited
    });
  };   */
  // Defining a state to open new Modal when user clicks on photo
  // Second state to track selected photo
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);
  // Helper function to manage modal open logic
  /*const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  } */
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
      {/*We were rendering child components like below previously
         firstly just PhotolistItem and then TopicList, NavBar and PhotoList
         but later we switched to rendering HomeRoute
         
      <ul className="photo-list">
        {photos.map((photo) => (
          <PhotoListItem key={photo.id} photo={photo} />
        ))}
        </ul> 
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

