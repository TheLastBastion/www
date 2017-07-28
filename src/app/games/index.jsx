import React from 'react';
import PropTypes from 'prop-types';
import styled from 'emotion/react';
import { withTheme } from 'theming';

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


function Games({ className, theme }) {
  const GamesStyled = styled('div')`
    align-items: center;
    background-color: ${theme.colors.backgroundColorLight};
    display: flex;
    flex-direction: column;

    .games__header {

    }

    .games__game-tiles {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  `;

  const gameTiles = games.map(GameTile);

  return (
    <GamesStyled className={className}>
      <h2 className="games__header">The Games We Love</h2>
      <div className="games__game-tiles">
        {gameTiles}
      </div>
    </GamesStyled>
  );
}

Games.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.shape({
    colors: PropTypes.shape[{
      backgroundColorDark: PropTypes.string,
    }],
  }).isRequired,
};

Games.defaultProps = {
  className: '',
};

export default withTheme(Games);
