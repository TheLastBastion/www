import React from 'react';
import PropTypes from 'prop-types';
import styled from 'emotion/react';
import classNames from 'classnames';

import GameTile from './GameTile';

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

const GamesStyled = styled('div')`
  .games__game-tiles {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

function Games({ className }) {
  const blockClassName = classNames('games', className);
  const gameTiles = games.map(GameTile);

  return (
    <GamesStyled className={blockClassName}>
      <h2>Games!</h2>
      <div className="games__game-tiles">
        {gameTiles}
      </div>
    </GamesStyled>
  );
}

Games.propTypes = {
  className: PropTypes.string,
};

Games.defaultProps = {
  className: '',
};

export default Games;
