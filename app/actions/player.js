import * as ActionType from '../constants/ActionType';

function timeUpdate(second) {
  return {
    type: ActionType.PLAYER_UPDATE_TIME,
    second
  }
}

export default {
  timeUpdate,
}