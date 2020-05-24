import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './assets/base.scss';
import { Provider } from 'react-redux';
import configureStore from './config/configureStore';
import Main from './components/Main';

const store = configureStore();
const rootElement = document.getElementById('root');

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootElement
  );
};

renderApp(Main);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
