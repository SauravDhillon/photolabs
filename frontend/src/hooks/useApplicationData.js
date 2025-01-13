import { useReducer, useState } from 'react';
/*
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
*/
// Creating custom hook using useReducer example
// Define Actions
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_TOPIC',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS',
};

// Initial State
const initialState = {
  favoritedPhotos: [],
  isModalOpen: false,
  selectedPhoto: null,
  photos: [],
  topics: [],
};

// Define Reducer
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favoritedPhotos: [...state.favoritedPhotos, action.payload.id],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.filter(
          (id) => id !== action.payload.id
        ),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photos: action.payload.photos };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topics: action.payload.topics };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload.photo };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, isModalOpen: true };
    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return { ...state, isModalOpen: false, selectedPhoto: null };
    default:
      throw new Error(
        `Unsupported action type: ${action.type}`
      );
  }
}

// Define Custom Hook 
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favoritedPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
