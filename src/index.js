// import React from 'react'
// import { Provider } from 'react-redux'
// import App from './App'
// import { createStore } from 'redux'
// import rootReducer from './store/index';
// import ReactDOM from 'react-dom';

// const store = createStore( rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(store)
// ReactDOM.render(
//   <Provider store={ store }>
//     <App />
//   </Provider>, document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
