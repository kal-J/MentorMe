import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import blueVersion from '../../styles/colors';
import safeAreaStyles from '../../styles/common';

const styles = StyleSheet.create({
  signinHeader: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 60,
    alignSelf: 'center'
  },
  authArea: {
    flex: 1
  },

  signinBtn: {
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 15
  },
  signinBtnGoogle: {
    backgroundColor: 'red'
  },
  signinBtnFacebook: {
    backgroundColor: blueVersion.primary,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    padding: 10
  },
  text: {
    alignContent: 'center',
    alignSelf: 'center'
  }
});

class Signin extends Component {
  render() {
    return (
      <View style={safeAreaStyles.safeArea}>
        <Text style={styles.signinHeader}>Sign In</Text>
        <View style={styles.authArea}>
          <View style={styles.signinWithFacebook}>
            <TouchableOpacity style={[styles.signinBtn,styles.signinBtnFacebook]}>
              <Text style={styles.btnText}>SIGN IN WITH FACEBOOK</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signinWithGoogle}>
            <Text style={styles.text}>OR</Text>
            <TouchableOpacity style={[styles.signinBtn, styles.signinBtnGoogle]}>
              <Text style={styles.btnText}>SIGN IN WITH Gmail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Signin;
