import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View
          scrollViewStyle
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>MentorMe</Text>
          <Image
            source={require('../../../public/images/mentor1.jpg')}
            style={{ width: '100%', height: 500 }}
          />
        </View>
        <View
          scrollViewStyle
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>MentorMe</Text>
          <Image
            source={require('../../../public/images/mentor1.jpg')}
            style={{ width: '100%', height: 500 }}
          />
        </View>
      </ScrollView>
    );
  }
}
