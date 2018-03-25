import React from 'react';

const ArtistDetails = ({specialArtist}) => {
  return (
    <div className="col-md-8">
      <div className="principal-artist-card">
        <h1>{specialArtist.name}</h1>
        <p>{specialArtist.bio}</p>
        <div>
          <img className="principal-artist-image" src={'assets/images/' + specialArtist.url} alt={specialArtist.name} />
        </div>
      </div>
    </div>
  )
}

export default ArtistDetails;