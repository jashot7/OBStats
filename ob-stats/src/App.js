import React, { Component, Fragment } from 'react';
import obLogo from './images/icon-openbazaar-text.png';
import './styles/App.css';
import StatsDisplay from './containers/stats-display/stats-display';

// Redux Imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(
  createStore
);

export default class App extends Component {
  getObHeaderFooter() {
    return (
      <Fragment>
        <div class="">
          <h1 className="fnt-accent3 clr-accent3 neontext1 center">
            OpenBazaar
          </h1>
        </div>
        <div class="">
          <h1 className="fnt-accent2 clr-accent2 center">Search Stats</h1>
        </div>
      </Fragment>
    );
  }
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="ob-stats-app-container clr-bg-bg1 clr-primary1">
          <header className="clr-bg-bg2 ob-header flex column justify-space-around align-center">
            {this.getObHeaderFooter()}
          </header>
          <section className="">
            <StatsDisplay />
          </section>
          <footer className="clr-bg-bg2 ob-header flex column justify-space-around align-center">
            {this.getObHeaderFooter()}
            <div className="flex row justify-space-around align-center">
              <div clasName="">a concept by </div>
              <div className="fnt-accent1 clr-accent fnt-larger neontext3 padSm">
                Jason Hotelling
              </div>
            </div>
          </footer>
        </div>
      </Provider>
    );
  }
}
