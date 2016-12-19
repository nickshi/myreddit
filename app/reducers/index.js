import { combineReducers } from 'redux';
import routes from './routes';
import reddit from './reddit';
import user from './user';

export default combineReducers({
  routes,
  reddit,
  user,
});