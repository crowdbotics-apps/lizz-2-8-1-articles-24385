import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile3202922Navigator from '../features/UserProfile3202922/navigator';
import Articles from "../features/Articles1202512/navigator";


/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile3202922: { screen: UserProfile3202922Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    },
  
  Articles: {
    screen: Articles
  }
  
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
