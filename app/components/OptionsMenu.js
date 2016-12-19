import React, {
	Component,
	PropTypes,
} from 'react';
import {
	View, 
	StyleSheet,
} from 'react-native';
import ModalPicker from 'react-native-modal-picker';


class OptionsMenu extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		const { options, onSelect, children } = this.props;
		return(
			<ModalPicker
				data = { options }
				initValue = 'SORT POSTS BY:'
				onChange = {(option) => { onSelect(option); }}
			>
			{ children }
			</ModalPicker>
		)
	}
}

OptionsMenu.propTypes = {
	options: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
}

export default OptionsMenu;

