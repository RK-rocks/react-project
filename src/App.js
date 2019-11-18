import React, { Component } from 'react';
// import './App.css';
import { createBrowserHistory } from "history";
// import {connect} from 'react-redux';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import layoutRoutes from "./routes/index.jsx";
import { Router, Route, Switch, Redirect } from "react-router-dom";
// import ReactDOM from 'react-dom';
import "./assets/scss/app.scss";

const hist = createBrowserHistory({ basename : '/my-app' });

class App extends Component {
  render() {
    return (
          <Provider store={store}>
            <Router history={hist}>
                  <Switch>
                      <Route exact path='/' render={() => (
                          <Redirect to='/login' />
                      )} />
                      {layoutRoutes.map((prop, key) => {
                          return (
                              <Route
                                  path={prop.path}
                                  component={prop.component}
                                  key={key}
                                  history={hist}
                              />
                          );
                      })}
                  </Switch>
              </Router>
          </Provider>
    );
  }
  // ReactDOM.render(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>, document.getElementById('root'),
  // );
}

export default (App);
