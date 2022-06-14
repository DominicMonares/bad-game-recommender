import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 65,
    height: 30,
    right: 0,
    marginRight: 75,
    marginTop: 12,
    zIndex: 1,
    position: 'absolute'
  },
  rating: {
    fontFamily: 'Share Tech',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: 'white'
  }
});

export default Rating;
