import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

import bgr_logo from '../shared/assets/bgr-logo.png';
import Game from './components/Game/Game.js';
import PageButtons from './components/PageButtons.js';
import fetchGameData from '../shared/services/gameData';

const App = () => {
  const [page, setPage] = useState(1);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const gameData = async () => {
      setGames(await fetchGameData(page));
    }

    gameData();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={bgr_logo} />
      <FlatList
        data={games}
        renderItem={item => <Game game={item} />}
      />
      <PageButtons
        page={page}
        updatePage={setPage}
        updateGames={setGames}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    resizeMode: 'contain',
    width: '50%',
    height: '20%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default App;
