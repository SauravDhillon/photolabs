import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({photo, closeModal }) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button"
              onClick={closeModal}> {/*We just pass ref here not call the function since it will close modal as soon as it opens one( during rendering)if we call it */}
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {photo && <img className="photo-details-modal__image" src={photo.urls.full} />}
    </div>
  )
};

export default PhotoDetailsModal;
