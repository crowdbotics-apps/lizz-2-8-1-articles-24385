import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4202923Navigator from '../features/BlankScreen4202923/navigator';
import UserProfile3202922Navigator from '../features/UserProfile3202922/navigator';
import Articles from "../features/Articles1202512/navigator";


/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
  Articles: {
    screen: Articles
  },
  
BlankScreen4202923: { screen: BlankScreen4202923Navigator },
UserProfile3202922: { screen: UserProfile3202922Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
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
