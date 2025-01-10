import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div>
      <img src={props.mainPhoto} />
      <img src={props.profilePhoto} />
      <p>{props.username}</p>
      <p>{props.cityLocation}, {props.countryLocation}</p>
    </div>
  );

};

export default PhotoListItem;
