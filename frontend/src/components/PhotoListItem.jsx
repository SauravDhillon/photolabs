import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <li className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={props.photo.urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.user.profile} />
        <div className="photo-list__user-info">
          <p>{props.photo.user.name}</p>
          <div className="photo-list__user-location">
            <p>{props.photo.location.city}, {props.photo.location.country}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
