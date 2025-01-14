import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, isFavorited, toggleFavorite }) {

  // const [favorited, setFavorited] = useState(false);
  // Initial state of favorite button is set to false or not selected 
  // When user clicks on button it is set to true using update function
  // form of setFavorited button
  // The updater function receives the previous state (prev) as its argument.
  // The state toggles using !prev:
  // If prev is false (photo is not favorited), it becomes true
  // If prev is true (photo is favorited), it becomes false
  //   const handleClick = () => {
  //   setFavorited((prev) => {
  //     console.log(`Photo is now ${!prev ? 'favorited' : 'unfavorited'}`);
  //     return !prev;
  //   });

  // };

  const handleClick = () => {
    // Here toggleFavorite will check if this photoId exists in favoritedPhotos Array if yes then it will remove it or unfavorite it
    toggleFavorite(photoId);
  }


  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {/* <FavIcon selected={favorited}/> */}
        <FavIcon selected={isFavorited} /> {/*Here isFavorited will be true when user selects the photo and as per FavIcon it will display red color */}
      </div>
    </div>
  );
}

export default PhotoFavButton;