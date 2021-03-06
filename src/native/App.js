import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  View
} from 'react-native';

import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../shared/store';
import { updateGames } from '../shared/actions';

import Header from './components/Header/Header';
import LoadingWheel from './components/LoadingWheel/LoadingWheel';
import Game from './components/Game/Game';
import PageButtons from './components/PageButtons/PageButtons';
import bgr_logo from '../shared/assets/logo.png';
import styles from './Styles.js';

import getGameData from '../shared/services/gameData';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const page = useSelector(state => state.page);
  const games = useSelector(state => state.games);
  const scrollRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const getInitialGames = async () => {
      const gameData = await getGameData(page);
      dispatch(updateGames(gameData));
      setLoading(false);
    }

    getInitialGames();
  }, []);

  let currentDisplay;
  if (loading) {
    currentDisplay = (
      <ActivityIndicator
        style={styles.loadingWheel}
        size="large"
        color="#5b49e3"
      />
    );
  } else {
    currentDisplay = (
      games.map(g => <Game key={g.name} game={g} />)
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Header />
      <ScrollView ref={scrollRef}>
        <Image style={styles.logo} source={bgr_logo} />
        {currentDisplay}
        <PageButtons scrollRef={scrollRef} />
      </ScrollView>
    </View>
  );
}

export default AppWrapper;
