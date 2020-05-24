import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link, Route } from 'react-router-dom';
import PageTitle from '../../Layout/AppMain/PageTitle';
import { Card, CardTitle, Button, Row } from 'reactstrap';
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
