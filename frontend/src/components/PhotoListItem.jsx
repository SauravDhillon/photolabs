import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const PhotoListItem = ({ photo, isFavorited, toggleFavorite, openModal }) => {
  // const displayModal = () => {
  //    return <PhotoDetailsModal />
  // } 


  return (
    <li className="photo-list__item">
      <PhotoFavButton
        photoId={photo.id}
        isFavorited={isFavorited}
        toggleFavorite={toggleFavorite}
      />
      <img className="photo-list__image"
        src={photo.urls.regular}
        onClick={() => openModal(photo)}
      />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info">
          <p>{photo.user.name}</p>
          <div className="photo-list__user-location">
            <p>{photo.location.city}, {photo.location.country}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
