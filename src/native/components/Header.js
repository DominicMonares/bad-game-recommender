import React from 'react';
import { StyleSheet, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container} />
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#5b49e3',
    borderBottomWidth: 1,
    borderColor: '#767676'
  }
});

export default Header;
