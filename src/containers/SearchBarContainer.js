import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

import SearchBar from '../components/SearchBar';

class SearchBarContainer extends Component {

  render() {
    const placeholderText = [
      'e.g. Lord of the Rings',
      'Your alltime favorite movie',
      'The best filmscore ever...'
    ];

    return (
      <SearchBar onSubmit={this.props.actions.fetchAlbums}
                 placeholder={placeholderText[Math.floor((Math.random() * placeholderText.length))]} />
    )
  }
}

SearchBarContainer.propTypes = {
  actions: PropTypes.object
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SearchBarContainer);
