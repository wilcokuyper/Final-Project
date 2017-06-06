import React, { Component } from 'react';

import Album from './Album';

// dummy data TODO create service to load actual data from spotify
import albumData from '../dummy-data';

class AlbumList extends Component {
  render() {
    return (
      <div className="albumContainer container">
          { albumData.albums.items.map( (album) => {
            return (
              <div key={ album.id } className="col-md-4">
                <Album { ...album } />
                </div>
              )
            })
          }
      </div>
    )
  }
}

export default AlbumList;
