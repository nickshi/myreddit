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
import * as Alias from '../../constants/Alias';
import styles from './styles';

const catids = [1];


class Home extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2,
      })
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

  renderHeader() {
    return <View style={{backgroundColor:'#f9f7f9', justifyContent:'center', height:40}}><Text style={{color: 'gray', fontSize:10, textAlign:'left'}}>HOT POSTS</Text></View>
  }

  renderItem(item, seciontID, rowID) {

    let thumbnail;
    
    if(item.data.url.lastIndexOf('gif') >= 0) {
      thumbnail = item.data.url;
    }
    console.log('thumbnail ', thumbnail)
    if(thumbnail == undefined && item.data.thumbnail.lastIndexOf("http") >= 0) {
      thumbnail = item.data.thumbnail;
    }

    if(thumbnail == undefined && item.data.hasOwnProperty('preview')) {
      const images = item.data.preview.images;
      if (images && images.length > 0) {
        thumbnail = images[0].source.url;
      }
    }
    thumbnail = 'http://www.clicktorelease.com/code/gif/1.gif';
    return (
      <TouchableHighlight onPress = {()=>{
        //Actions.pageview({pageUrl: item.data.url})
      }}>
        <View style = { styles.itemContainer }>
          <Image 
            style = { styles.itemImage }
            source = {{ uri: thumbnail }}
          />
          <View style = { styles.itemRight } >
            <Text style = { styles.title }>{item.data.title}</Text>
            <View style = { styles.info }>
              <View style = {{ flex: 1, flexDirection: 'row'}}>
                <Text style = { styles.info_head } >from:</Text>
                <Text style = { styles.info_body }>{item.data.author}</Text>
              </View>
              <View style = {{ flex: 1, flexDirection: 'row'}}>
                <Text style = { styles.info_head } >like:</Text>
                <Text style = { styles.info_body }>{item.data.ups}</Text>
              </View>
            </View>
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