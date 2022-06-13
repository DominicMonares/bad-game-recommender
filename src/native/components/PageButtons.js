import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import fetchGameData from '../../shared/services/gameData';

const PageButtons = (props) => {
  const page = props.page;
  const updatePage = props.updatePage;
  const updateGames = props.updateGames;

  return (
    <View style={styles.container}>
      <Button
        title='<'
        onPress={async () => {
          if (page > 1) {
            updatePage(page - 1);
            updateGames(await fetchGameData(page - 1));
          }
        }}
      />
      <Button
        title={page.toString()}
        // grey current button out
      />
      <Button
        title={(page + 1).toString()}
        onPress={async () => {
          updatePage(page + 1);
          updateGames(await fetchGameData(page + 1));
        }}
      />
      <Button
        title={(page + 2).toString()}
        onPress={async () => {
          updatePage(page + 2);
          updateGames(await fetchGameData(page + 2));
        }}
      />
      <Button
        title={(page + 3).toString()}
        onPress={async () => {
          updatePage(page + 3);
          updateGames(await fetchGameData(page + 3));
        }}
      />
      <Button
        title={(page + 4).toString()}
        onPress={async () => {
          updatePage(page + 4);
          updateGames(await fetchGameData(page + 4));
        }}
      />
      <Button
        title='>'
        onPress={async () => {
          updatePage(page + 1);
          updateGames(await fetchGameData(page + 1));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})

export default PageButtons;
