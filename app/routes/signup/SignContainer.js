import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RedditActionCreators from '../../actions/reddit';
import Sign from './Sign';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 1,
  }
})
class SignContainer extends Component {
  render() {
    return (
      <View style = { styles.container }>
        <Sign {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignContainer);