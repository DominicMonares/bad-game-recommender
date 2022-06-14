import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import fetchGameData from '../../shared/services/gameData';

const PageButtons = (props) => {
  const page = props.page;
  const updatePage = props.updatePage;
  const updateGames = props.updateGames;
  const updateDisplay = async (page) => {
    updatePage(page);
    updateGames(await fetchGameData(page));
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          if (page > 1) { updateDisplay(page - 1) }
        }}
      >
        <Text style={styles.page}>{'<'}</Text>
      </Pressable>
      <Pressable style={styles.currentButton}>
        <Text style={styles.currentPage}>{page}</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={async () => { updateDisplay(page + 1) }}
      >
        <Text style={styles.page}>{page + 1}</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={async () => { updateDisplay(page + 2) }}
      >
        <Text style={styles.page}>{page + 2}</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={async () => { updateDisplay(page + 3) }}
      >
        <Text style={styles.page}>{page + 3}</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={async () => { updateDisplay(page + 4) }}
      >
        <Text style={styles.page}>{page + 4}</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={async () => { updateDisplay(page + 1) }}
      >
        <Text style={styles.page}>{'>'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40
  },
  button: {
    width: 40,
  },
  page: {
    fontFamily: 'Share Tech',
    fontSize: 25,
    textAlign: 'center'
  },
  currentButton: {
    backgroundColor: 'black',
    borderRadius: 5,
    width: 40,
  },
  currentPage: {
    fontFamily: 'Share Tech',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  }
})

export default PageButtons;
