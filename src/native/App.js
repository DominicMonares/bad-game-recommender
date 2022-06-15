import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  View
} from 'react-native';

import bgr_logo from '../shared/assets/bgr-logo.png';
import Header from './components/Header/Header';
import Game from './components/Game/Game';
import PageButtons from './components/PageButtons/PageButtons';
import fetchGameData from '../shared/services/gameData';
import styles from './Styles.js';

const App = () => {
  const [page, setPage] = useState(1);
  const [games, setGames] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    const gameData = async () => {
      setGames(await fetchGameData(page));
    }

    gameData();
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Header />
      <ScrollView ref={scrollRef}>
        <Image style={styles.logo} source={bgr_logo} />
        {games.map(g => { return <Game key={g.name} game={g} /> })}
        <PageButtons
          page={page}
          updatePage={setPage}
          updateGames={setGames}
          scrollRef={scrollRef}
        />
      </ScrollView>
    </View>
  );
}

export default App;
