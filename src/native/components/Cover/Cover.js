import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Rating from '../Rating/Rating';

const Cover = (props) => {
  const url = props.url;
  const rating = props.rating;

  return (
    <View>
      <Rating rating={rating} />
      <View style={styles.blContainer}>
        <View style={styles.brContainer}>
          <View style={styles.tlContainer}>
            <View style={styles.trContainer}>
              <Image
                style={styles.cover}
                source={{ uri: url }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blContainer: {
    shadowColor: 'black',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  brContainer: {
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  tlContainer: {
    shadowColor: 'black',
    shadowOffset: {width: -4, height: -4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  trContainer: {
    shadowColor: 'black',
    shadowOffset: {width: 4, height: -4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  cover: {
    resizeMode: 'contain',
    width: 264,
    height: 352,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'black',
    borderRadius: 10
  }
});

export default Cover;
