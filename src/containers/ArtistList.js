import {connect} from 'react-redux';
import ArtistList from '../components/ArtistList';
import {selectedArtist} from '../actions/index';
import {bindActionCreators} from  'redux';

const ArtistListWithRedux = connect(
  function mapStateToProps(state) {
    return {artists: state.artist}
  },

  function mapDispatchToProps(dispatch) {
    // onArtistClick es un método = propiedad + función
    return bindActionCreators({onArtistClick: selectedArtist}, dispatch);
  }
)(ArtistList);

export default ArtistListWithRedux;

// // onArtistClick es un método = propiedad + función
// return {onArtistClick: (artist) => {
//   dispatch ({
//     type: 'ARTIST_SELECTED',
//     artist
//   })
// }}