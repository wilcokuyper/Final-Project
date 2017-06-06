import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

class Searchbar extends Component {
  onSubmitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <div>
          <Field
            className="form-control"
            name="searchText"
            component="input"
            type="text"
            placeholder={this.props.placeholder}
          />
        </div>
      </form>
    );
  }
}

Searchbar.propTypes = {
  placeholder: PropTypes.string
};

export default reduxForm({
  form: 'search'
})(Searchbar);
