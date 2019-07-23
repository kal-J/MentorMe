import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// import InstaClone from './src/InstaClone';
// import Signin from './src/components/screens/Signin';
import SplashScreen from './src/components/presentation/SplashScreen';
// import HomeScreen from './src/components/screens/HomeScreen';
import TabNavigator from './src/components/presentation/TabNavigator';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1000);
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen splashView={styles.container} />;
    }
    return <TabNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
