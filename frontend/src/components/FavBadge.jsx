import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist} selected={isFavPhotoExist} /> {/*Here if favoritedPhotos array has photos isFavPhotoExist will be true which will be passed into FavIcon which will have displayAlert and selected to be true */}
    </div>
  )
};

export default FavBadge;