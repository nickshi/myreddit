'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';
import images from '../../images';
import { Constant } from '../../constants';
import {
  Actions,
} from 'react-native-router-flux';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},

	joinImage: {
		marginTop: Constant.NAVBAR_HEIGHT + 20,
		marginBottom: 20,
		width: 300,
		height: 300,
		borderRadius: 150,
	},

	joinText: {
		fontSize: 17,
		color: 'black',
	},

	buttonGroup: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginTop: 40,
	},

	loginButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		width: 120,
		borderWidth: 1,
		borderColor: 'blue',
		margin: 5
	},

	signupButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		width: 120,
		backgroundColor: 'blue',
		margin: 5
	}
});

export default class Join extends Component {
	constructor (props) {
		super(props);


	}

	render() {
		console.log('images ', images)
		return(
			<View style = {styles.container}>
				<Image 
					style = {styles.joinImage}
					source = {images.join}
				/>
				<Text style = {styles.joinText}>
					Sign up to upvote the best content
				</Text>
				<View style = {styles.buttonGroup}>
					<TouchableOpacity
						onPress = {()=>{
							Actions.sign();
						}}
					>
						<View style = {styles.loginButton}>
							<Text>
								LOG IN
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						onPress = {()=>{}}
					>
						<View style = {styles.signupButton}>
							<Text>
								SIGN UP
							</Text>
						</View>
					</TouchableOpacity>

				</View>
			</View>
		);
	}
}