import { useState } from 'react';

const useApplicationData = () => {
  // We have used favoritedPhotos array global state which we pass down as prop to all components to keep track of user favorites, initialized to be empty array
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  // Defining a state to open new Modal when user clicks on photo
  // Second state to track selected photo
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const updateToFavPhotoIds = (photoId) => {
    setFavoritedPhotos((prevFavorites) => {
      return prevFavorites.includes(photoId)
        ? prevFavorites.filter(id => id !== photoId) // Remove photoId if already favorited using array filter function where we are making a new array of photos whose photoId is not same as photoId of photo we are checking 
        : [...prevFavorites, photoId]; // Add if not favorited
    });
  }
  const setPhotoSelected = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  }
  const onClosePhotoDetailsModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  }
  return {
    state: {
      favoritedPhotos,
      isModalOpen,
      selectedPhoto
    },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
