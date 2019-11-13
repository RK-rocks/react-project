import axios from 'axios'
import { BASEURL_API } from '../helper/constant'
import { store } from '../redux/store'

const handleError = e => new Promise(() => {
  if( e.response && e.response.status === 401)
  {      
      store.dispatch({
        type : "LOGOUT",
        isLogin: false,
        accessToken: null,
        adminName : null
      })
  }
  else
  { console.log('error') }
});

export const setAuthHeader = () => {
    axios.defaults.headers.common[
      'access_token'
    ] = store.getState().auth.accessToken
    axios.defaults.headers.common['admin_id'] = store.getState().auth.adminId
  }

export const setHeaderContent = (params) => {
  let data = new FormData();
  for (let key in params) {
      data.append(key, params[key]);
  }
  return data;
}

export const loginCall = params => {
  // let data = setHeaderContent(params)
  return axios
    .post(`${BASEURL_API}admin/adminLogin`, params)
    .then(e => e.data)
    .catch(handleError)
}

export const adminLogout = () => {
  // let data = setHeaderContent(params)
  return axios
    .post(`${BASEURL_API}admin/adminLogout`)
    .then(e => e.data)
    .catch(handleError)
}