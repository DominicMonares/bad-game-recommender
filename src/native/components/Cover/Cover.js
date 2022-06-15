import React from 'react';
import { Image, View } from 'react-native';

import Rating from '../Rating/Rating';
import styles from './Styles';

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

export default Cover;
