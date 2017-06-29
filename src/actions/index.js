import axios from 'axios';
import { FETCH_ALBUMS } from './types';

export function fetchAlbums(searchString = null) {
  return function(dispatch) {
    let url = 'http://localhost:3000/';
    if(searchString != null)
      url += 'search?q=' + encodeURI(searchString.searchText);
    axios.get(url)
    .then(response => {
      const albumData = response.data.albums.items.map((item) => {
        return {
          album_type: item.album_type || '',
          artist: item.artists[0].name || '',
          href: item.external_urls.spotify || '',
          id: item.id || '',
          image: item.images[1].url || '',
          name: item.name || '' ,
          type: item.type || ''
        };
      });

      dispatch({
        type: FETCH_ALBUMS,
        payload: albumData
      });
    });
  }
}
