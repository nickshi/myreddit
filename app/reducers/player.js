import { List, Map } from 'immutable';
import * as ActionType from '../constants/ActionType';
import createReducer from '../utils/create-reducer';
const initState = {
  second: 0,
  pause: false,
  autoPause: false,
};


const actionHandler = {
  [ActionType.PLAYER_UPDATE_TIME] : (state, action) => {
    const { second } = action;
    return Object.assign({}, state, { second });
  },

  [ActionType.PLAYER_SEEK] : (state, action) => {
    return state;
  },
}

export default createReducer(initState, actionHandler);
