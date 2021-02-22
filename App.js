import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import IndexScreen from "./src/containers/index";
import ListScreen from "./src/containers/list";


const MainNavigator = createStackNavigator({
  Index: {screen: IndexScreen, navigationOptions: {headerShown: false}},
  List: {screen: ListScreen, navigationOptions: {headerShown: false}},
});

const App = createAppContainer(MainNavigator);
export default App;


