import { createStackNavigator } from 'react-navigation';
import Main from './tabs';
import Welcome from '../pages/welcome/index';
import Detail from '../pages/detail/index';

export default createStackNavigator(
  {
    Main,
    Welcome,
    Detail
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
    initialRouteName: 'Main',
    mode: 'card',
  }
)