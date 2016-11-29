import * as ActionType from '../constants/ActionType';
import  * as host from '../constants/Urls';

function fetchRedditList(isRefreshing, loading, isLoadMore, categoryID, count, after) {
  return dispatch => {
    dispatch(fetchReddit(isRefreshing, loading, isLoadMore));
    const fUrl = host.BASE_URL 
    + host.DOMAINS[categoryID] 
    + '?count=' + count
    + '&after=' + after;

    return fetch(fUrl)
    .then(response => response.json())
    .then(redditData => {
      dispatch(receiveReddit(redditData.data, categoryID, redditData.data.after));
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