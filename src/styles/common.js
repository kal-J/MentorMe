import { StyleSheet, StatusBar, Platform } from 'react-native';

import colors from './colors';

const safeAreaStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
  },
});

export default safeAreaStyles;