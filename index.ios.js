/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './app';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

class Reddit extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('ShadowEnglish', () => Reddit);
