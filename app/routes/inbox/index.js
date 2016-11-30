'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';


class InBoxContainer extends Component {
	render() {
		return (
			<View style= {{ flex: 1, alignItems:'center', justifyContent: 'center'}} >
				<Text>InBoxContainer</Text>
			</View>
		);
	}
}

export default InBoxContainer;