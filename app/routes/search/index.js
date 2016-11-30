'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import SearchBar from 'react-native-search-bar';

class SearchContainer extends Component {
	render() {
		return (
			<View style= {{ flex: 1, borderWidth: 1, borderColor: 'blue'}} >
				<SearchBar
			    ref='searchBar'
			    textFieldBackgroundColor='gray'
			    placeholder='Search'
			    onChangeText={()=>{}}
			    onSearchButtonPress={()=>{}}
			    onCancelButtonPress={()=>{}}
			    />
				<Text>SearchContainer</Text>
			</View>
		);
	}
}

export default SearchContainer;