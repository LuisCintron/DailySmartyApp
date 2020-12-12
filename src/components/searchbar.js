import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';



class SearchBar extends Component {
  handleFormSubmit = function ({ query }) {
    this.props.onSubmit(query);
  }

  renderInput(Field) {
    return <input type='text' placeholder='Search DailySmarty' {...Field.input} />
  }
  render() {

    const { handleSubmit } = this.props;

    return (
      <form className='search-bar' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <input placeholder='Search DailySmarty' />
        <field name='query' component={this.renderinput} />
      </form>
    );
  }
}
SearchBar = reduxForm({
  form: 'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);


export default SearchBar