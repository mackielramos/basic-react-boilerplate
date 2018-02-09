import {caxios} from '../utils/axios';

export function fetchUsers() {
  return function(dispatch) {
    dispatch({type: 'FETCH_USERS', payload: 1})
    caxios().get('users')
      .then((response) => {
        dispatch({type: "FETCH_USERS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USERS_REJECTED", payload: err})
      })
  }
}