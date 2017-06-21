import axios from 'axios';
import { FETCH_ALBUMS } from './types';

export function fetchAlbums() {
  return function(dispatch) {
    axios.get('http://localhost:3000/')
    .then(response => {
      dispatch({
        type: FETCH_ALBUMS,
        payload: response.data
      });
    });
  }
}
