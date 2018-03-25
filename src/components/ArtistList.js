import React from 'react';
import ArtistListItem from './ArtistListItem';

const ArtistList = ({artists, onArtistClick}) => {
  debugger;
  return (
    <ul className="col-md-4">
      {artists.map(el => 
      <ArtistListItem 
        key= {el.name}
        onClick = {() => onArtistClick(el)}
        {...el}
      />
    )}
    </ul>
  )
}

export default ArtistList;