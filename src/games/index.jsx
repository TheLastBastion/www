import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './index.css';

const games = [
  {
    path: '/games/space-engineers',
    title: 'Space Engineers',
  },
  {
    path: '/games/minecraft',
    title: 'Minecraft',
  },
  {
    path: '/games/rust',
    title: 'Rust',
  },
];

function GameTile(game, index) {
  return (
    <Link key={index} className="game-tile" to={game.path}>{game.title}</Link>
  );
}

function Games({ className }) {
  const blockClassName = classNames('games', className);
  const gameTiles = games.map(GameTile);

  return (
    <div className={blockClassName}>
      <h2>Games!</h2>
      <div className="games__game-tiles">
        {gameTiles}
      </div>
    </div>
  );
}

Games.propTypes = {
  className: PropTypes.string,
};

Games.defaultProps = {
  className: '',
};

export default Games;
