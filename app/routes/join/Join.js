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

	login() {
		let { userAction } = this.props;
		userAction.authorizate(()=>{
			Actions.home();
		},() => {});
	}

	logout() {
		let { userAction } = this.props;
		userAction.logout();
	}

	render() {

		let { user } = this.props;
		let isLogin = user.access_token !== null;
		const actionButton = !isLogin ? (<TouchableOpacity
						onPress = {()=>{ this.login() }}
					>
						<View style = {styles.loginButton}>
							<Text>
								LOG IN
							</Text>
						</View>
					</TouchableOpacity>) : (<TouchableOpacity
						onPress = {()=>{ this.logout() }}
					>
						<View style = {styles.signupButton}>
							<Text>
								LOG OUT
							</Text>
						</View>
					</TouchableOpacity>);

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
			  	{ actionButton }
				</View>
			</View>
		);
	}
}