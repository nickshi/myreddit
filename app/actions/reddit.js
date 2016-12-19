import * as ActionType from '../constants/ActionType';
import reddit from '../services/session/reddit';

function fetchRedditList(isRefreshing, loading, isLoadMore, categoryID, count, after) {
  return dispatch => {
    dispatch(fetchReddit(isRefreshing, loading, isLoadMore));
    return reddit.getHotReddit(count, after)
    .then(jsonData => {
      dispatch(receiveReddit(jsonData.data, categoryID, jsonData.data.after));
    })
    .catch(err => {
       dispatch(receiveReddit([], categoryID));
    })
  }
}

function fetchReddit(isRefreshing, loading, isLoadMore) {
  return {
    type: ActionType.FETCH_REDDIT_LIST,
    isRefreshing,
    loading,
    isLoadMore,
  }
}

function receiveReddit(redditData, categoryID, after) {
  return {
    type: ActionType.RECEIVE_REDDIT_LIST,
    redditData,
    categoryID,
    after,
  }
}

export default {
  fetchRedditList,
}