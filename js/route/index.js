import { createStackNavigator } from 'react-navigation';
import Main from './tabs';
import Welcome from '../pages/welcome/index';
import Detail from '../pages/detail/index';
import Search from '../pages/search/index';
import TakePicture from '../pages/takePicture/index';

export default createStackNavigator(
  {
    Main,
    Welcome,
    Detail,
    Search,
    TakePicture,
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
    initialRouteName: 'Main',
    mode: 'card',
  }
)