import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MyTab from './component/myTabBar';
import Recommend from './recommend';
import Message from './message';

class Home extends Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <MyTab  navigation={this.props.navigation}/>}
      >
        <Message tabLabel="Message"></Message>
        <Recommend tabLabel="Recommend"></Recommend>
      </ScrollableTabView>
    );
  }
}

export default Home;