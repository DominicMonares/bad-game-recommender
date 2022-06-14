import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cover from './Cover';

const Game = (props) => {
  const game = props.game;

  return (
    <View style={styles.container}>
      <Cover style={styles.cover} url={game.cover_url} rating={game.rating} />
      <Text style={styles.title}>{game.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50
  },
  cover: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  title: {
    fontFamily: 'Share Tech',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 15
  }
});

export default Game;
