import React, { useEffect, useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';

import { store } from '../../../shared/store';
import { updateGames } from '../../../shared/actions';

import logo from '../../../shared/assets/bgr-logo.png';
import Game from './components/Game.jsx';
import PageButtons from './components/PageButtons.jsx';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import fetchGameData from '../../../shared/services/gameData';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const page = useSelector(state => state.page);
  const games = useSelector(state => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    const getInitialGames = async () => {
      const gameData = await fetchGameData(page);
      dispatch(updateGames(gameData));
      setLoading(false);
    }

    getInitialGames();
  }, []);

  let currentDisplay;

  if (loading) {
    currentDisplay = (
      <div className="loading_wheel">
        <TailSpin color="#5b49e3" height={80} width={80} />
      </div>
    )
  } else {
    currentDisplay = (
      <div className="games">
        {games.map(g => <Game key={g.name} game={g} />)}
      </div>
    );
  }

  return (
    <div>
      <img className="logo" src={logo} />
      {currentDisplay}
      <PageButtons setLoading={setLoading} />
    </div>
  )
}

export default AppWrapper;
