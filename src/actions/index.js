export const actionTypes = {
  ARTIST_SELECTED: 'ARTIST_SELECTED'
};

export const selectedArtist = artist => ({
  type: actionTypes.ARTIST_SELECTED,
  artist
})

