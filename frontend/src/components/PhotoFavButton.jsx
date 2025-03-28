import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
function PhotoFavButton({ photoId, isFavorited, toggleFavorite }) {
 /* Below is example of local state defined in PhotoFavButton component where state is either true or false to decide what will be color of favicon inside this component depending on state below. Later in project we switched to global state for favoritedPhotos array defined in App component because App doesn't know about this state defined here because it needs to change color of favbadge in topNavigationBar component which can only be possible by uplifting state to App component and defining state and logic there. So we have now switched to passing down favoritedPhotos as props to HomeRoute component -> PhotoList component where we defined isFavorited which checks if favoritedPhotos array has any photos and it will become true, afterwards isFavorited is passed to -> PhotoListItem component -> PhotoFavButton component, so now here in this component we can use it to change the color of FavIcon component in return statement. When user clicks on button below it calls handleclick function and which in turn calls toggleFavorite function with photoId so it goes to App component which has logic defined to handle state in App. So it is perfect example to demonstrate how data flows from child component to parent component App using event handling. 
 
  const [favorited, setFavorited] = useState(false);
  Initial state of favorite button is set to false or not selected 
  When user clicks on button it is set to true using update function
  form of setFavorited button
  The updater function receives the previous state (prev) as its argument.
  The state toggles using !prev:
  If prev is false (photo is not favorited), it becomes true
  If prev is true (photo is favorited), it becomes false
    const handleClick = () => {
    setFavorited((prev) => {
      console.log(`Photo is now ${!prev ? 'favorited' : 'unfavorited'}`);
      return !prev;
    });
  }; */
  const handleClick = () => {
    // Here toggleFavorite function from App will check if this photoId exists in favoritedPhotos Array if yes then it will remove it or unfavorite it
    toggleFavorite(photoId);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {/* <FavIcon selected={favorited}/> */}
        <FavIcon selected={isFavorited} /> {/*Here isFavorited will be true when user selects the photo and as per FavIcon component defination it will display red color when selected is true, isFavorited depends on global state FavoritedPhotos and is defined in PhotoList Component where it is passed to PhotoListItem component -> PhotoFavButton component. We have switched from using local state as described above (favorited which is boolean) to global state (favoritedPhotos array described in App component) when user clicks on photoFavButton here it triggers handleclick as described above to call toggleFavorite function with photoId which in turn sets isFavorited to true if not button is not clicked previously which in turn make favicon change color to red. */}
      </div>
    </div>
  );
}
export default PhotoFavButton;
