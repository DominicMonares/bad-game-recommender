import React from 'react';
import { Text, View } from 'react-native';

import styles from './Styles';

const Rating = (props) => {
  const rating = props.rating;

  return (
    <View style={styles.container}>
      <Text style={styles.rating}>
        {`${Math.floor(rating)}/100`}
      </Text>
    </View>
  );
}

export default Rating;
