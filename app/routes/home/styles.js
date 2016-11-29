import {
  StyleSheet,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    //alignSelf: "stretch",
    flex: 1,
    borderWidth: 1,
    borderColor: 'red'
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    padding: 10
  },

  itemImage: {
    width: 88,
    height: 88,
    //borderRadius: 44,
    marginRight: 10,
  },

  itemRight: {
    flexDirection: 'column',
    flex: 1,
  },

  title: {
    fontSize: 18,
    textAlign: 'left',
    flex: 3,
  },

  info: {
    flexDirection: 'row',
    marginTop: 5,
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