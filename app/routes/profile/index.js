'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';


class ProfileContainer extends Component {
	render() {
		return (
			<View style= {{ flex: 1, alignItems:'center', justifyContent: 'center'}} >
				<Text>ProfileContainer</Text>
			</View>
		);
	}
}

export default ProfileContainer;