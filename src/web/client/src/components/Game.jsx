import React from 'react';

import Cover from './Cover.jsx';

const Game = (props) => {
  const game = props.game;

  return (
    <div className="game_container">
      <Cover
        url={game.url}
        cover_url={game.cover_url}
        rating={game.rating}
      />
      <a className="title_container" href={game.url} target="_blank">
        <span className="title">
          {game.name}
        </span>
      </a>
      <div className="genres">{game.genres.join(', ')}</div>
    </div>
  );
}

export default Game;
