import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const handleClick = () => {
    console.log("user clicked");
  }
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon onClick={handleClick}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;