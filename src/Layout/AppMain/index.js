import { Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Suspense, lazy, Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from '../../_helpers';
import { history } from '../../_helpers';
import Loader from 'react-loaders';

import { ToastContainer } from 'react-toastify';
import Login from '../../components/UserPages/Login';
import Register from '../../components/UserPages/Register';
import ForgotPassword from '../../components/UserPages/ForgotPassword';

const UserPages = lazy(() => import('../../components/UserPages'));
const Dashboards = lazy(() => import('../../components/Dashboards'));

const AppMain = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      // dispatch(alertActions.clear());
    });
  }, []);

  return (
    <Fragment>
      <Suspense
        fallback={
          <div className='loader-container'>
            <div className='loader-container-inner'>
              <div className='text-center'>
                <Loader type='line-scale-party' />
              </div>
              <h6 className='mt-3'>
                Please wait while we load all the Pages examples
                <small>
                  Because this is a demonstration we load at once all the Pages
                  examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        {/* <Route path="/" component={UserPages}/> */}
        <Router history={history}>
          <Switch>
            <PrivateRoute path='/dashboard' component={Dashboards} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/forgot-password' component={ForgotPassword} />
            {/* <Route path="/categories/create" component={CreateCategory}/> */}
            {/* <Redirect from="*" to="/login" /> */}
          </Switch>
        </Router>
      </Suspense>

      {/* <Route exact path="/" render={() => (
                <Redirect to="/"/>
            )}/> */}
      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
