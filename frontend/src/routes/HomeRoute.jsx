import React from "react";
import '../styles/HomeRoute.scss';
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ photos, topics, favoritedPhotos, toggleFavorite }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList
        photos={photos}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
      />
    </div>
  )
}

export default HomeRoute;
