import React from 'react';
import ArtistListItem from './ArtistListItem';

const ArtistList = ({artists}) => {
  return (
    <div className="col-md-4">
      {artists.map(el => <ArtistListItem artist={el}/>)}
    </div>
  )
}

export default ArtistList;