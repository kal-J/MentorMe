import React from 'react';
import { Text, View } from 'react-native';
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

class FeaturedScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Featured!</Text>
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search!</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Home: HomeScreen,
  Featured: FeaturedScreen,
  Search: SearchScreen
});

export default createAppContainer(TabNavigator);
