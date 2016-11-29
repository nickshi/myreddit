'use strict';

import * as ActionType from '../constants/ActionType';
import createReducer from '../utils/create-reducer';

const initialState = {
  loading: false,
  isRefreshing: false,
  isLoadMore: false,
  noMore: false,
  redditList:{},
  redditAfter:{1: '', 2: '', 3: '', 4: ''}
};


const redditAction = {
  [ActionType.FETCH_REDDIT_LIST]: (state, action) => (
    Object.assign({}, state, {
      isRefreshing: action.isRefreshing,
      isLoadMore: action.isLoadMore,
      loading: action.loading,
    })
  ),
  [ActionType.RECEIVE_REDDIT_LIST]: (state, action) => (
    Object.assign({}, state, {
      isRefreshing: false,
      isLoadMore: false,
      noMore: action.redditData.children.length === 0,
      redditList: getRedditList(action, state),
      loading: action.loading,
    })
  ),
}

function getRedditList(action, state, isLoadMore) {
  if (state.isLoadMore) {
    state.redditList[action.categoryID] = state.redditList[action.categoryID].concat(action.redditData.children);
  } else {
    state.redditList[action.categoryID] = action.redditData.children;
  }
  state.redditAfter[action.categoryID] = action.redditData.after;
  return state.redditList;
}

export default createReducer(initialState, redditAction);