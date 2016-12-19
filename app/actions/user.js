import * as ActionType from '../constants/ActionType';
import user from '../services/session/user';


function authorizate(success, fail) {
  return async dispatch => {
    dispatch(login());
    let access_token = await user.authorizate();

    if (access_token !== null) {
      dispatch(loginSuccess(access_token));
      success();
    } else {
      dispatch(loginFail());
      fail();
    }
  }
}

function login() {
  return {
    type: ActionType.REDDIT_LOGIN,
  }
}

function logout() {
  return {
    type: ActionType.REDDIT_LOGOUT,
  }
}

function loginSuccess(token) {
  return {
    type: ActionType.REDDIT_LOGIN_SUCCESS,
    access_token: token,
  }
}

function loginFail() {
  return {
    type: ActionType.REDDIT_LOGIN_FAIL,
  }
}

export default {
  authorizate,
  logout,
}