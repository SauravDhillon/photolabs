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
        onClick={() => openModal(photo)} //The wrapper (() => {}) is necessary because: openModal(photo) is a function call that requires an argument (photo).If we directly wrote onClick={openModal(photo)}, the openModal(photo) function would be immediately invoked when the component renders, which is not what we want.The wrapper ensures that openModal(photo) is called only when the onClick event occurs.
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
