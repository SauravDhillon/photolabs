import React from "react";
import '../styles/HomeRoute.scss';
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = ({ photos, topics }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} />
    </div>
  )
}

export default HomeRoute;
