import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Cover = (props) => {
  const url = props.url;
  const rating = props.rating;

  return (
    <View>
      <Image style={styles.cover} source={{uri: url}} />
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    resizeMode: 'contain',
    width: 300,
    height: 250
  }
});

export default Cover;
