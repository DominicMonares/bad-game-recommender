import React from 'react';
import { Text, View } from 'react-native';

import Cover from './Cover';

const Game = (props) => {
  const game = props.game.item;
  return (
    <View>
      <Cover url={game.cover_url} rating={game.rating} />
      <Text>{game.name}</Text>
    </View>
  )
}

export default Game;
