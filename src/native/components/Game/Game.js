import React from 'react';
import { Pressable, Text, View } from 'react-native';

import Cover from '../Cover/Cover';
import openBrowser from '../Browser/Browser';
import styles from './Styles';

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

export default Game;
