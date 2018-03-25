import {connect} from 'react-redux';
import ArtistDetails from '../components/ArtistDetails';

const ArtistDetailsWithRedux = connect(
  function mapStateToProps(state) {
    return {specialArtist: state.active_artist}
  }
)(ArtistDetails);

export default ArtistDetailsWithRedux; 