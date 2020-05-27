import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import CategoryHome from './category';
import AddCategory from './addCategory';

export default class Category extends Component {
  render() {
    return (
      <Fragment>
        <Route
          exact
          path={`${this.props.match.url}`}
          component={CategoryHome}
        />
        <Route
          path={`${this.props.match.url}/create`}
          component={AddCategory}
        />
      </Fragment>
    );
  }
}
