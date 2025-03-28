import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist} selected={isFavPhotoExist} /> {/*Here if favoritedPhotos array has photos isFavPhotoExist(which was passed as prop in HomeRoute to TopNavigationBar component) will be true which will be passed into FavIcon which will have displayAlert and selected to be true which is being managed by global state */}
    </div>
  )
};
export default FavBadge;