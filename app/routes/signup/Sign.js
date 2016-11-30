import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import images from '../../images';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
		
	},

	header: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderColor: '#F0F5F5',
		marginTop: 30,
	},

	redditIcon: {
		width: 80,
		height: 80,
	},

	textLogin: {
		marginTop: 10,
		marginBottom: 10,
		color: 'black',
		fontSize: 23,
		fontWeight: 'bold'
	},

	tipBar: {
		height: 30,
		backgroundColor: '#F0F5F5',
		alignItems: 'center',
		justifyContent: 'center',
	},

	textTip: {
		fontSize: 13,
		color: 'blue',
	},


})
export default class Sign extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  this.focusNextField = this.focusNextField.bind(this);
	}

	focusNextField(nextField) {
    this.refs[nextField].focus();
  }

	render() {
		return(
			<View style = {styles.container}>
				<View style = {styles.header}>
					<Image
						style = {styles.redditIcon}
						source = {images.logo_reddit}
					/>
					<Text style = {styles.textLogin}>
						Login
					</Text>
				</View>
				<TouchableOpacity>
					<View style = {styles.tipBar}>
						<Text style = {styles.textTip}>
							Don't have an account?Sign up here!
						</Text>
					</View>
				</TouchableOpacity>

				<View>
					<TextInput
						ref='1'
		        style={{height: 40}}
		        onChangeText={(text) => this.setState({text})}
		        onSubmitEditing={() => this.focusNextField('2')}
		        placeholder="Username"
		        returnKeyType = 'next'
		        value={this.state.text}
		      />
		      <View style={{backgroundColor: '#F0F5F5', height: 1}}/>
		      <TextInput
		      	ref='2'
		        style={{height: 40}}
		        onChangeText={(text) => this.setState({text})}
		        placeholder="Password"
		        secureTextEntry={true}
		        returnKeyType = 'go'
		        value={this.state.text}
		      />
				</View>
			</View>
		);
	}
}