import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  //For Asit
  /*constructor() {
    super();
    this.props.selectBook(this.props.books[0]);
  }*/
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          className = "list-group-item"
          key = {book.title}
          onClick = {() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      )
    })
  }
  render() {
    return (
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    )
  }
}

//whatever is returned from this function will be available as
// a prop to the book-list container
function mapStateToProps(state) {
  return {
    books:state.books
  }
}

//Whatever gets returned from this function will be available as
// a prop to the book-list container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, we need to pass down the action
  //to all the reducers in the application
  return bindActionCreators({selectBook : selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
