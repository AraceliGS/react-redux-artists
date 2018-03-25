import React from 'react';

const ArtistListItem = ({name, bio, url, onClick}) => {
  debugger;
  return (
    <li className="list-group-item" onClick={onClick}>
      <div className="artist-card">
        <h2>{name}</h2>
        <p>{bio}</p>
        <div className="artist-image-container">
          <img className="artist-image" src={ 'assets/images/'+ url} alt={name} />
        </div>
      </div>
    </li>
  )
}

export default ArtistListItem;