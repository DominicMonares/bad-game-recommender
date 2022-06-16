import React, { useEffect, useState } from 'react';

import logo from '../../../shared/assets/bgr-logo.png';
import Game from './components/Game';
import PageButtons from './components/PageButtons';



const App = () => {
  const [page, setPage] = useState(1);
  const [games, setGames] = useState([]);

  return (
    <div className="app_container">
      <img className="logo" src={logo} />
      <Game game={game} />
    </div>
  )
}

export default App;
