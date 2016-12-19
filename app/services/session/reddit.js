import { fetchApi } from '../api';


const endPoints = {
  hot: 'hot/.json',

}

function getHotReddit(count, after) {
  return fetchApi(endPoints.hot, {
    count,
    after,
  }, 'get');
}

export default {
  getHotReddit,
}