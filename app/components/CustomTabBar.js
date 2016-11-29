import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes = {
  goToPage: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.array,
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#ccc'
  }
});
class CustomTabBar extends Component {
  renderTabOption(name, page) {
    const { 
            activeTab, 
            activeTextColor, 
            inactiveTextColor,
          } = this.props;

    const isTabActive = activeTab === page;
    const activeTextColort = activeTextColor || 'navy';
    const inactiveTextColort = inactiveTextColor || 'black';

    const textStyle = isTabActive ? 
    { color: activeTextColort, fontSize: 16 } 
    : 
    { color: inactiveTextColort, fontSize: 16 }

    return (
      <TouchableOpacity 
        style = { styles.tab }
        key = { name }
        onPress = {() => this.props.goToPage(page)}
      >
        <View>
          <Text style = { textStyle }>
          {name}
          </Text>
        </View>
      </TouchableOpacity>
    ); 
  }

  render() {
    console.log('this.props ', this.props)
    const { containerWidth, tabs, underlineStyle } = this.props;
    const numberOfTabs = tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 2,
      backgroundColor: 'navy',
      bottom: 0
    };
    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs]
    });
    return (
      <View style = {[styles.tabs, {backgroundColor: this.props.backgroundColor || null}]}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        <Animated.View style = {[tabUnderlineStyle, underlineStyle, { left }]} />
      </View>
    );
  }
}

export default CustomTabBar;