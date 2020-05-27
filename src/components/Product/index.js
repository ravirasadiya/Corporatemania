import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import ProductHome from './product';
import AddProduct from './AddProduct';

export default class Prodcut extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path={`${this.props.match.url}`} component={ProductHome} />
        <Route
          exact
          path={`${this.props.match.url}/addProduct`}
          component={AddProduct}
        />
      </Fragment>
    );
  }
}
