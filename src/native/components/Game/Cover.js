import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Cover = (props) => {
  const url = props.url;
  const rating = props.rating;

  return (
    <View>
      <Image
        style={styles.cover}
        source={{uri: url}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    resizeMode: 'contain',
    width: 264,
    height: 352,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'black',
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});

export default Cover;
