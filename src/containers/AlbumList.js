import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Album from '../components/Album';

class AlbumList extends Component {
  componentWillMount() {
    this.props.fetchAlbums();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          { this.props.albums.map( album =>
            <Album key={ album.id } { ...album } />
          ) }
        </div>
      </div>
    )
  }
}

AlbumList.propTypes = {
  albums: PropTypes.array.isRequired,
  fetchAlbums: PropTypes.func
}

const mapStateToProps = state => {
  return {
    albums: state.albums,
  };
}

export default connect(mapStateToProps, actions)(AlbumList);
