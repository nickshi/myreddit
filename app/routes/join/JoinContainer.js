import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RedditActionCreators from '../../actions/reddit';
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
    redditAction: bindActionCreators(RedditActionCreators, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    reddit: state.reddit,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinContainer);