import {actionTypes} from '../actions/index';

export default function(state={name:'Nana Mizuki', bio:'Nana Mizuki es una actriz de voz y cantante japonesa. Además de ser cantante también es compositora, letrista, seiyū y embajadora turística de Japón.', url:'nana-mizuki.jpg'}, action) {
  switch(action.type) {
    case actionTypes.ARTIST_SELECTED:
      return action.artist;
    default:
      return state;
  }
}