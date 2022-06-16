import React from 'react';

import Cover from './Cover.jsx';

const Game = (props) => {
  const game = props.game;

  return (
    <div>
      <Cover url={game.url} rating={game.rating} />
      <a href={game.url} target="_blank">
        {game.name}
      </a>
      <span>{game.genres.join(', ')}</span>
    </div>
  )
}

export default Game;
