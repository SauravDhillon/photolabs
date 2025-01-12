import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, isFavorited, closeModal, favoritedPhotos, toggleFavorite, openModal }) => {
  // console.log(photo);
  return (
    <div className="photo-details-modal">
      {/* Close Button */}
      <button className="photo-details-modal__close-button"
        onClick={closeModal}> {/*We just pass ref here not call the function since it will close modal as soon as it opens one( during rendering)if we call it */}
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Main Photo */}
      <div className="photo-details-modal__top-bar">
        <PhotoFavButton
          photoId={photo.id}
          isFavorited={isFavorited}
          toggleFavorite={toggleFavorite}
        />
        <img
          className="photo-details-modal__image"
          src={photo.urls.full} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={photo.user.profile} />
          <div className="photo-details-modal__photographer-info">
            <p>{photo.user.name}</p>
            <div className="photo-details-modal__photographer-location">
              <p>{photo.location.city}, {photo.location.country}</p>
            </div>
          </div>
        </div>
        
        </div>

        
      <div className="photo-details-modal__images">
      <h1 className="photo-details-modal__header">Similar Photos</h1>
        <PhotoList
          photos={Object.values(photo.similar_photos)}
          favoritedPhotos={favoritedPhotos}
          toggleFavorite={toggleFavorite}
          openModal={openModal}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
