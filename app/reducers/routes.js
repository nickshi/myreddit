import createReducer from '../utils/create-reducer';

const initialState = {
  scene: {},
};

const actionHandler = {
  focus: (state, action) => (
    Object.assign({}, state, {
      scene: action.scene,
    })
  ),
};

export default createReducer(initialState, actionHandler);