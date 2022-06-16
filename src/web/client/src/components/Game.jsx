import React from 'react';

import Cover from './Cover.jsx';

const Game = (props) => {
  const game = props.game;

  return (
    <div>
      <Cover url={game.cover_url} rating={game.rating} />
      <a href={game.url} target="_blank">
        {game.name}
      </a>
      <div>{game.genres.join(', ')}</div>
    </div>
  )
}

export default Game;
