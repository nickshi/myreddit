import {
  Actions,
  Router,
  Reducer,
  Scene,
  DefaultRenderer,
} from 'react-native-router-flux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import HomeContainer from './routes/home';
import SideMenuContainer from './containers/SideMenuContainer';

import Drawer from 'react-native-drawer';


class RedditDrawer extends Component {
  render() {
    const state = this.props.navigationState;
    const children = state.children;

    return (
      <Drawer
        ref="navigation"
        type="displace"
        //onOpen={()=>{Actions.refresh({key:state.key, open: true})}}
        //onClose={()=>Actions.refresh({key:state.key, open: false})}
        content={<SideMenuContainer />}
        tapToClose
        negotiatePan
        openDrawerOffset={0.6}
        panCloseMask={0.8}
        tweenHandler={(ratio) => ({
         main: { opacity:Math.max(0.54, 1-ratio) }
      })}>
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const scenes = Actions.create(
    <Scene 
      key = 'Tabs'
      title = 'Tabs'
      tabBarStyle={{ backgroundColor: '#FFFFFF',borderTopWidth:1, borderColor: 'gray' }}
      tabs = { true }
    >
      <Scene key = "home" component = {HomeContainer} title = "Home" icon = {TabIcon} hideNavBar/>
      <Scene key = "search" component = {HomeContainer} title = "Search" icon = {TabIcon} hideNavBar/>
      <Scene key = "InBox" component = {HomeContainer} title = "InBox" icon = {TabIcon} hideNavBar/>
      <Scene key = "nick_shi" component = {HomeContainer} title = "nick_shi" icon = {TabIcon} hideNavBar/>
    </Scene>
  //</Scene>

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