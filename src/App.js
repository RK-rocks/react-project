import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Demo from './Components/Demo'
import ReactDOM from 'react-dom';
import "./assets/scss/app.scss";
class App extends Component {
  render() {
    return (
          <Provider store={store}>
            <Demo>
            </Demo>
          </Provider>
    );
  }
  // ReactDOM.render(
  //   <Provider store={store}>
  //     <App />
  //   </Provider>, document.getElementById('root'),
  // );
}

function mapStateToProps(state){
  return{
    books:state.counter
  };
}

export default (App);
