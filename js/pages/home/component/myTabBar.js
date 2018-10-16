import React, { PureComponent } from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, Animated } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class MyTabBar extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      textInput: ''
    }

  }

  render() {
    let translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0,  100],
    })
    return (
      <View>
        <View>
          <StatusBar
            backgroundColor='rgb(65,188,85)'
          ></StatusBar>
        </View>
        <View style={styles.head}>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="地铁里的阅读时光"
              onSubmitEditing={() => this.submit()}
              onChangeText={(text) => this.setState({textInput: text})}  
            />
            <EvilIcons name="search" style={styles.iconSearch} size={32}></EvilIcons>
            <FontAwesome5
              onPress={() => this.props.navigation.navigate('TakePicture')}
              name="expand"
              style={styles.iconExpand}
              size={22}></FontAwesome5>
          </View>
          <View style={styles.tabs}>
            <View style={styles.tabsContainer}>
              <View style={styles.tabView}>
                <Text style={styles.tabText} onPress={() => this.props.goToPage(0)}>动态</Text>
              </View>
              <View style={styles.tabView}>
                <Text style={styles.tabText} onPress={() => this.props.goToPage(1)}>推荐</Text>
              </View>
              <Animated.View 
                style={[styles.line, { transform: [{translateX}] }]}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  submit () {
    console.log('你提交了：'+ this.state.textInput)
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 38,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 45,
    paddingRight: 45,
  },
  iconSearch: {
    position: 'absolute',
    top: 5,
    left: 10,
  },
  iconExpand: {
    position: 'absolute',
    right: 15,
    top: 7,
  },
  head: {
    backgroundColor: 'rgb(65,188,85)',
    padding: 15,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tabsContainer: {
    width: 200,
    flexDirection: 'row',
  },
  tabView: {
    width: 100,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    fontSize: 18,
  },
  line: {
    position: 'absolute',
    width: 30,
    height: 2,
    backgroundColor: 'white',
    bottom: 0,
    left: 35,
  }
})

export default MyTabBar;