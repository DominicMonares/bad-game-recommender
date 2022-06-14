import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import bgr_logo from '../shared/assets/bgr-logo.png';
import Game from './components/Game.js';
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
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />
      <ScrollView>
        <Image style={styles.logo} source={bgr_logo} />
        {games.map(g => { return <Game key={g.name} game={g} /> })}
        <PageButtons
          page={page}
          updatePage={setPage}
          updateGames={setGames}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: 'black'
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    width: 200,
    height: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
    marginTop: 15
  }
});

export default App;
