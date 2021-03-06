'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  InteractionManager,
  ListView,
  Image,
  RefreshControl,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import CustomTabBar from '../../components/CustomTabBar';
import OptionsMenu from '../../components/OptionsMenu';
import styles from './styles';
import moment from 'moment';
const catids = [1];

class Home extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2,
      }),
      sortBy: 'Hot',
    };

    this.renderItem = this.renderItem.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  componentDidMount() {
    const { redditAction } = this.props;
    InteractionManager.runAfterInteractions(()=> {
      catids.forEach((cID) => {
        redditAction.fetchRedditList(false, true, false, cID, 20, null)
      })
    })
  }

  onRefresh(cid) {
    const { redditAction } = this.props;
    redditAction.fetchRedditList(true, false, false, cid, 20, null);
  }

  onEndReached(cid) {
    const { redditAction, reddit } = this.props;
    redditAction.fetchRedditList(false, false, true, cid, 20, reddit.redditAfter[cid]);
  }

  onOptionSelect(option) {
    this.setState({
      sortBy: option.label
    })
  }

  renderHeader() {
    const options = [
      { key: 1, section: true, label: 'SORT POSTS BY:', },
      { key: 2, label: 'Hot', },
      { key: 3, label: 'New', },
      { key: 4, label: 'Top', },
      { key: 5, label: 'Controversial', },
    ];
    
    return (
      <OptionsMenu
        options = { options }
        onSelect = {(option)=>{ this.onOptionSelect(option)}} 
      >
        <View style={{backgroundColor:'#f9f7f9', justifyContent:'center', height:40}}>
          <Text style={{color: 'gray', fontSize:10, textAlign:'left'}}>{this.state.sortBy}</Text>
        </View>
      </OptionsMenu>
    );
  }

  renderItem(item, seciontID, rowID) {

    let thumbnail;
    
    if(item.data.url.lastIndexOf('gif') >= 0) {
      thumbnail = item.data.url;
    }
    
    if(thumbnail == undefined && item.data.thumbnail.lastIndexOf("http") >= 0) {
      thumbnail = item.data.thumbnail;
    }

    if(thumbnail == undefined && item.data.hasOwnProperty('preview')) {
      const images = item.data.preview.images;
      if (images && images.length > 0) {
        thumbnail = images[0].source.url;
      }
    }

    let pre = item.data.permalink.split('/', 3).join('/');
    let second = item.data.created;
    let timeDes = moment(second * 1000).fromNow();

    return (
      <TouchableHighlight onPress = {()=>{
        //Actions.pageview({pageUrl: item.data.url})
      }}>
        <View style = { styles.itemContainer }>
          <View style = { styles.itemHead }>
            <Text style = {{}}>{pre}</Text>
            <Text style = {{paddingLeft: 10}}>{timeDes}</Text>
          </View>
          <View style = { styles.itemContent }>
            <Text style = { styles.title }>{item.data.title}</Text>
            <Image 
              style = { styles.itemImage }
              source = {{ uri: thumbnail }}
            />
          </View>
          <View style = { styles.itemFooter }>
                <View style = {{ flex: 1, flexDirection: 'row'}}>
                  <Text style = { styles.info_head } >from:</Text>
                  <Text style = { styles.info_body }>{item.data.author}</Text>
                </View>
                <View style = {{ flex: 1, flexDirection: 'row'}}>
                  <Text style = { styles.info_head } >like:</Text>
                  <Text style = { styles.info_body }>{item.data.ups}</Text>
                </View>
          </View>

          <View style = { {flex:1, height: 10,backgroundColor: '#ddd'} }>
            
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderContent(dataSource, categoryID) {
    const { reddit } = this.props;
    if (reddit.loading) {
      return <View />
    }

    const isEmpty = reddit.redditList[categoryID] === undefined
                    || reddit.redditList[categoryID].length === 0;

    if (isEmpty) {
      return <View />
    }

    return (
      <ListView
        initialListSize = { 1 }
        dataSource = { dataSource }
        renderRow = { this.renderItem }
        renderHeader = { this.renderHeader }
        onEndReached = {()=> {this.onEndReached(categoryID)}}
        contentInset={{top: 64, bottom: 49}}
        onEndReachedThreshold = { 10 }
        style = { styles.listView }
        refreshControl = {
          <RefreshControl
            refreshing = {reddit.isRefreshing}
            onRefresh = {() => this.onRefresh(categoryID)}
          />
        }
      />
    )
  }

  render() {
    const { reddit } = this.props;

    return (
      <View style = { styles.container }>
         {this.renderContent(this.state.dataSource.cloneWithRows(reddit.redditList[1] == undefined ? [] : reddit.redditList[1]), 1)}
      </View>
    )

  }
}

export default Home;