import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, isFavorited, toggleFavorite }) => {
  return (
    <li className="photo-list__item">
      <PhotoFavButton
        photoId={photo.id}
        isFavorited={isFavorited}
        toggleFavorite={toggleFavorite}
      />
      <img className="photo-list__image" src={photo.urls.regular} />
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
