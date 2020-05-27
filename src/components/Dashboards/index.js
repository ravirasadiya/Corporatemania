import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// DASHBOARDS

import Category from '../Category';
import Banner from '../Banner';

// Layout

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';

// Theme Options
import ThemeOptions from '../../Layout/ThemeOptions';
import Prodcut from '../Product';

const Dashboards = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className='app-main'>
      <AppSidebar />
      <div className='app-main__outer'>
        <div className='app-main__inner'>
          <Route path={`${match.url}/categories`} component={Category} />
          <Route path={`${match.url}/banner`} component={Banner} />
          <Route path={`${match.url}/product`} component={Prodcut} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
