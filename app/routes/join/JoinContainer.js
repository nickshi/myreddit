import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UserActionCreators from '../../actions/user';
import Join from './Join';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 1,
  }
})
class JoinContainer extends Component {
  render() {
    return (
      <View style = { styles.container }>
        <Join {...this.props}/>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userAction: bindActionCreators(UserActionCreators, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinContainer);