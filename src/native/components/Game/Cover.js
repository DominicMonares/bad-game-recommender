import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Cover = (props) => {
  const url = props.url;
  const rating = props.rating;

  return (
    <View style={styles.container}>
      <Image style={styles.cover} source={{uri: url}} />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   justifyContent: 'space'
  // },
  cover: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%'
  }
});

export default Cover;
