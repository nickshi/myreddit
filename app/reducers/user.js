'use strict';

import * as ActionType from '../constants/ActionType';
import createReducer from '../utils/create-reducer';

const initialState = {
  access_token:null,
  loading: false,
};

const userAction = {
  [ActionType.REDDIT_LOGIN]: (state, action) => (
    Object.assign({}, state, {
      loading: true,
    })
  ),
  [ActionType.REDDIT_LOGIN_SUCCESS]: (state, action) => (
    Object.assign({}, state, {
      access_token: action.access_token,
      loading: false,
    })
  ),
  [ActionType.REDDIT_LOGIN_FAIL]: (state, action) => (
    Object.assign({}, state, {
      access_token: null,
      loading: false,
    })
  ),
  [ActionType.REDDIT_LOGOUT]: (state, action) => (
    Object.assign({}, state, {
      access_token: null,
    })
  ),
};

export default createReducer(initialState, userAction);