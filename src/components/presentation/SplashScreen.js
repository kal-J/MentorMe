import React, { Component } from 'react';
import { View, Text } from 'react-native';
import blueVersion from "../../styles/colors";

class SplashScreen extends Component {
  render() {
    const viewStyles = [this.props.splashView, { backgroundColor: 'white' }];
    const textStyles = {
      color: blueVersion.primary,
      fontSize: 40,
      fontWeight: 'bold'
    };
    return (
      <View style={viewStyles}>
        <Text style={textStyles}>MentorMe</Text>
      </View>
    );
  }
}

export default SplashScreen;
