import {
  Actions,
  Router,
  Reducer,
  Scene,
} from 'react-native-router-flux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginScreen from './components/LoginScreen';
const scenes = Actions.create(
  <Scene key = 'root' hideNavBar = { true }>
    <Scene key="login" component={LoginScreen} title="Login" initial={true}/>
  </Scene>
);

class Routes extends Component {

  constructor(props) {
    super(props);
    this.reducerCreate = this.reducerCreate.bind(this);
  }

  reducerCreate(params) {
    const defaultReducer = Reducer(params);
    return (state, action) => {
      this.props.dispatch(action)
      return defaultReducer(state, action);
    }
  }

  render() {
    return (
      <Router
        createReducer = { this.reducerCreate }
        scenes = { scenes }
      />
    )
  }
}

export default connect()(Routes);