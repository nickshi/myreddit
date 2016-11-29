export default function createReducer(initState, actionHandlers) {
  return (state = initState, action) => {
    const reduceFn = actionHandlers[action.type]
    if (!reduceFn) return state;
    return { ...state, ...reduceFn(state, action)};
  }
}