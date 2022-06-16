import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { store } from '../../../../shared/store';
import { updateGames } from '../../../../shared/actions';

import logo from '../../../../shared/assets/bgr-logo.png';
import Game from './components/Game';
import PageButtons from './components/PageButtons';

import fetchGameData from '../../../../shared/services/gameData';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const App = () => {
  const page = useSelector(state => state.page);
  const games = useSelector(state => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    const getInitialGames = async () => {
      const gameData = await fetchGameData(page);
      dispatch(updateGames(gameData));
    }

    getInitialGames();
  }, [])

  return (
    <div className="app_container">
      <img className="logo" src={logo} />
      {games.map(g => <Game key={g.name} game={g} />)}
      <PageButtons />
    </div>
  )
}

export default AppWrapper;
