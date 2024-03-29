import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from "history";
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';

const history = createBrowserHistory();
// const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    ...reducers
  }),
  composeEnhancer(applyMiddleware(...middlewares)),
);

store.subscribe(() => {
  localStorage.setItem('accessToken', store.getState().auth.accessToken)
  localStorage.setItem('isLogin', store.getState().auth.isLogin)
  localStorage.setItem('adminId', store.getState().auth.adminId)
  localStorage.setItem('adminName', store.getState().auth.adminName)
  localStorage.setItem('adminType', store.getState().auth.adminType)
})

export { store, history };
