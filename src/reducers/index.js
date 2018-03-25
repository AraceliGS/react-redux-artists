import {combineReducers} from 'redux';
import artistsReducers from './reducer-artists';
import artistActiveReducer from './reducer-active-artist';

// Juntando los reducers y exportandolos para que pasen al store, y este se los pase al connect
const rootReducer = combineReducers ({
  artist: artistsReducers,
  active_artist: artistActiveReducer
});

export default rootReducer;
