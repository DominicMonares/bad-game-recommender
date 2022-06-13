import React from 'react';
import { Button, View } from 'react-native';

const PageButtons = (props) => {
  if (props < 5) {
    return (
      <View>
        <Button
          title={1}
        />
        <Button
          title={2}
        />
        <Button
          title={3}
        />
        <Button
          title={4}
        />
        <Button
          title={5}
        />
      </View>
    )
  } else {
    return (
      <View>
        <Button
          title={props.page}
        />
        <Button
          title={props.page + 1}
        />
        <Button
          title={props.page + 2}
        />
        <Button
          title={props.page + 3}
        />
        <Button
          title={props.page + 4}
        />
      </View>
    )
  }
}

export default Game;
