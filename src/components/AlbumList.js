import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Album from './Album';

class AlbumList extends Component {
  componentWillMount() {
    this.props.fetchAlbums();
  }

  render() {
    return (
      <div className="albumContainer container card-deck">
          { this.props.albums.map( album =>
            <Album key={ album.id } { ...album } />
          ) }
      </div>
    )
  }
}

AlbumList.propTypes = {
  albums:       PropTypes.array.IsRequired,
  fetchAlbums:  PropTypes.func.IsRequired
}

const mapStateToProps = state => {
  return {
    albums: state.albums
  };
}

export default connect(mapStateToProps, actions)(AlbumList);
