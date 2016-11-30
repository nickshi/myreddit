import {
  Actions,
  Router,
  Reducer,
  Scene,
  DefaultRenderer,
  Modal,
} from 'react-native-router-flux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import HomeContainer from './routes/home';
import InBoxContainer from './routes/inbox';
import SearchContainer from './routes/search';
import JoinContainer from './routes/join';
import SignContainer from './routes/signup';
import SideMenuContainer from './containers/SideMenuContainer';
import Icon from 'react-native-vector-icons/Ionicons';
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

const TabIcon = ({ selected, title, iconName }) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Icon
        name = { iconName }
        size = { 30 }
        color={selected ? '#F00' :'#AAA'}
      />
    </View>
  );
}

const scenes = Actions.create(
  <Scene key = 'modal' component={Modal}>
    <Scene key = 'root'>
      <Scene 
        key = 'Tabs'
        title = 'Tabs'
        tabBarStyle={{ backgroundColor: '#FFFFFF',borderTopWidth:1, borderColor: 'gray' }}
        tabs = { true }
      >
        <Scene key = "home" component = {HomeContainer} title = "Reddit" icon = {TabIcon} iconName={"logo-reddit"}/>
        <Scene key = "search" component = {SearchContainer} title = "Search" icon = {TabIcon} hideNavBar iconName={"ios-search"}/>
        <Scene key = "inbox" component = {InBoxContainer} title = "InBox" icon = {TabIcon}  iconName={"ios-mail"}/>
        <Scene key = "join" component = {JoinContainer} title = "Join Reddit" icon = {TabIcon}  iconName={"ios-person"}/>
      </Scene>
      <Scene key = "sign" component = {SignContainer} direction="vertical" hideNavBar/>
    </Scene>
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