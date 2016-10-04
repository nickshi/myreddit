/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './src/app';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

class ShadowEnglish extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('ShadowEnglish', () => ShadowEnglish);
