import {
  StyleSheet,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },

  itemImage: {
    width: 88,
    height: 88,
    //borderRadius: 44,
    margin: 5,

  },

  itemHead: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },

  title: {
    alignSelf: 'flex-start',
    fontSize: 15,
    textAlign: 'left',
    flex: 3,
  },

  itemFooter: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },

  info_head: {
    color: 'gray',
    fontSize: 14,
    marginRight: 5,
  },

  info_body: {
    color: 'red',
    fontSize: 14,
    marginRight: 20,
  },

  listView: {
    flex: 1,
  }
})

export default styles;