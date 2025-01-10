import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <li>
      <img className="photo-list__item" src={props.photo.imageSource} />
      <img src={props.photo.profile} />
      <p>{props.photo.username}</p>
      <p>{props.photo.location.city}, {props.photo.location.country}</p>
    </li>
  );
};

export default PhotoListItem;
