import { combineReducers } from 'redux';
import routes from './routes';
import reddit from './reddit';

export default combineReducers({
  routes,
  reddit,
});