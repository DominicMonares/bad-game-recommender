import React, { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { store } from '../../../shared/store';
import { updateGames } from '../../../shared/actions';

import logo from '../../../shared/assets/bgr-logo.png';
import Game from './components/Game.jsx';
import PageButtons from './components/PageButtons.jsx';

import fetchGameData from '../../../shared/services/gameData';

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
  console.log('GAMES ', games)
  const dispatch = useDispatch();

  useEffect(() => {
    const getInitialGames = async () => {
      const gameData = await fetchGameData(page);
      console.log('GD ', gameData)
      dispatch(updateGames(gameData));
    }

    getInitialGames();
  }, []);

  return (
    <div className="app_container">
      <img className="logo" src={logo} />
      <div className="games">
        {games.map(g => <Game key={g.name} game={g} />)}
      </div>
      <PageButtons />
    </div>
  )
}

export default AppWrapper;
