import React from 'react';
import { Text, View } from 'react-native';

const Game = (props) => {
  return (
    <View>
      <Text>{props.game.item.name}</Text>
    </View>
  )
}

export default Game;
