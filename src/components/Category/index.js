import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import CategoryDefault from './CategoryDefault';
import CreateCategory from './CreateCategory';

export default class Category extends Component {
  render() {
    return (
      <Fragment>
        <Route
          exact
          path={`${this.props.match.url}`}
          component={CategoryDefault}
        />
        <Route
          path={`${this.props.match.url}/create`}
          component={CreateCategory}
        />
      </Fragment>
    );
  }
}
