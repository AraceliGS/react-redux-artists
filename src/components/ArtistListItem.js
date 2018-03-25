import React from 'react';

const ArtistListItem = ({artist}) => {
  return (
    <div className="artist-card">
      <h2>{artist.name}</h2>
      <p>{artist.bio}</p>
      <div className="artist-image-container">
        <img className="artist-image" src={ 'assets/images/'+ artist.url} alt={artist.name} />
      </div>
    </div>
  )
}

export default ArtistListItem;