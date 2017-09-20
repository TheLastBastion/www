import React from 'react';
import styled from 'emotion/react';
import { Link } from 'react-router-dom';

const GameTileStyled = styled(Link)`
  padding: 16px;
  width: 100%;
`;

function GameTile(game, index) {
  return (
    <GameTileStyled key={index} to={game.path}>{game.title}
      <img src={game.img} alt={game.title} />
    </GameTileStyled>
  );
}

export default GameTile;
