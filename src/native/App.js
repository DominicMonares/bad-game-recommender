import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View} from 'react-native';

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

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
