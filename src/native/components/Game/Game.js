import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Cover from '../Cover/Cover';
import openBrowser from '../Browser/Browser';

const Game = (props) => {
  const game = props.game;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => {
        openBrowser(game.url);
      }}>
        <Cover style={styles.cover} url={game.cover_url} rating={game.rating} />
      </Pressable>
      <Pressable onPress={() => {
        openBrowser(game.url);
      }}>
        <Text style={styles.title}>{game.name}</Text>
      </Pressable>
      <Text style={styles.genres}>{game.genres.join(', ')}</Text>
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
    textDecorationLine: 'underline',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 15
  },
  genres: {
    fontFamily: 'Share Tech',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default Game;
