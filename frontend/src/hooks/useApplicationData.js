import { useReducer, useState, useEffect } from 'react';
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
const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS'
};

// Initial State
const initialState = {
  favoritedPhotos: [],
  isModalOpen: false,
  selectedPhoto: null,
  photoData: [],
  topicData: []
};


// Define Reducer - The reducer will return a new state object each time it handles a dispatched action
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state, // used spread operator here to clone state, used spread operator to maintain the previous state before updating specific properties
        favoritedPhotos: [...state.favoritedPhotos, action.payload.id],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.filter(
          (id) => id !== action.payload.id  // Here we checked if that photo is already favorited remove from favorites
        ),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload.photo };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, isModalOpen: true };
    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return { ...state, isModalOpen: false, selectedPhoto: null };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
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

  // function to fetch different image categories when users click on specific photo topics in the top navigation
  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }
        return response.json();
      })
      .then((photoData) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData});
      })
      .catch((error) => {
        console.error("Error fetching photos for topic:", error);
      });
  };

  useEffect(() => {
    Promise.all([
      fetch('/api/photos').then(res => res.json()),
      fetch('/api/topics').then(res => res.json()),
    ])
    .then(([photoData, topicData]) => {
      // Dispatch is doing similar kind of function like setState
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData }); 
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
    });
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic,
  };
};

export default useApplicationData;
