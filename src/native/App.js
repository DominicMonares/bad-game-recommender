// React | React-Native
import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

// Redux
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from '../shared/store'
import { updateGames } from '../shared/actions/index.js';

// Components
import bgr_logo from '../shared/assets/bgr-logo.png';
import Game from './components/Game';

import fetchGameData from '../shared/services/gameData';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const App = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const gameData = async () => {
      dispatch(updateGames(await fetchGameData(state.page)));
    }

    gameData();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={bgr_logo} />
      <FlatList
        data={state.games}
        renderItem={item => <Game game={item} />}
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
    height: '20%'
  }
});

export default AppWrapper;
