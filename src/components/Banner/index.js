import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import BannerHome from './banner';
import AddBanner from './addBanner';

export default class Banner extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path={`${this.props.match.url}`} component={BannerHome} />
        <Route
          path={`${this.props.match.url}/addBanner`}
          component={AddBanner}
        />
      </Fragment>
    );
  }
}
