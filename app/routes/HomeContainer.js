import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RedditActionCreators from '../actions/reddit';
import Home from './Home';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
})
class HomeContainer extends Component {
  render() {
    return (
      <View style = { styles.container }>
        <Main {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);