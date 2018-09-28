import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Home from '../pages/home/index';
import BMM from '../pages/BMM/index';
import Team from '../pages/team/index';
import Buy from '../pages/buy/index';
import My from '../pages/my/index';

export default createBottomTabNavigator(
  {
    Home,
    BMM,
    Team,
    Buy,
    My,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconColor = focused? tintColor : 'grey';
        let textStyles = focused? { color: tintColor } : {};
        if ( routeName === 'Home') {
          return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Entypo name='Home' color={iconColor} />
              <Text style={[textStyles, { fontSize: 12}]}>首页</Text>
            </View>
          )
        } else if ( routeName === 'BMM') {
          return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <MaterialCommunityIcons name='book-multiple' color={iconColor} />
              <Text style={[textStyles, { fontSize: 12}]}>书影音</Text>
            </View>
          )
        } else if ( routeName === 'Team') {
          return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Feather name='calendar' color={iconColor} />
              <Text style={[textStyles, { fontSize: 12}]}>小组</Text>
            </View>
          )
        } else if ( routeName === 'Buy') {
          return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Entypo name='calendar' color={iconColor} />
              <Text style={[textStyles, { fontSize: 12}]}>市集</Text>
            </View>
          )
        } else if ( routeName === 'My') {
          return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <SimpleLineIcons name='user' color={iconColor} />
              <Text style={[textStyles, { fontSize: 12}]}>我的</Text>
            </View>
          )
        }
      },
    }),
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: 'rgb(7,188,252)',
      showLabel: false,
    }
  }
)
