import React from 'react';
import { Image, Pressable, View } from 'react-native';

import Rating from '../Rating/Rating';
import Browser from '../Browser/Browser';
import styles from './Styles';

const Cover = (props) => {
  const url = props.url;
  const cover_url = props.cover_url;
  const rating = props.rating;

  return (
    <View style={styles.coverContainer}>
      <Pressable onPress={() => Browser(url)}>
        <Rating rating={rating} />
        <View style={styles.bottomLeft}>
          <View style={styles.bottomRight}>
            <View style={styles.topLeft}>
              <View style={styles.topRight}>
                <Image style={styles.cover} source={{ uri: cover_url }} />
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default Cover;
