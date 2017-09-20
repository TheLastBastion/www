import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { css } from 'emotion';
import { withTheme } from 'theming';

import { TABLET } from '../constants/media-queries';
import castle from '../images/castle.svg';
import transformerLarge from '../images/transformer-large.png';

function Splash({ theme, className }) {
  const cssClassName = css`
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    justify-content: center;
    overflow-x: hidden;
    text-align: center;

    .splash__scene {
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 0 1.5em;
      width: 100%;
    }

    .splash__image {
      flex: 0 0 auto;
      margin: 0 1.5em;
      width: 150%;

      @media (min-width: ${TABLET}px) {
        width: auto;
      }
    }

    .splash__scene-one {
      background-color: ${theme.colors.backgroundColorDarkAlt};
    }

    .splash__castle {
    }

    .splash__scene-two {
      background-color: ${theme.colors.backgroundColorDark};
      position: relative;
    }

    .splash__trailer-video {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -25%);
    }
  `;

  const blockClassName = classNames(cssClassName, className);

  return (
    <div className={blockClassName}>
      <div className="splash__scene splash__scene-one">
        <img className="splash__image splash__castle" src={castle} alt="splash" />
      </div>
      <div className="splash__scene splash__scene-two">
        <img className="splash__image" src={transformerLarge} alt="splash" />
        <iframe
          allowFullScreen
          className="splash__trailer-video"
          title="space-battle"
          src="https://www.youtube.com/embed/c2BhzUfBEaw"
          frameBorder="0"
          width="560"
          height="315"
        />
      </div>
    </div>
  );
}

Splash.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape[{
      backgroundColorDark: PropTypes.string,
    }],
  }).isRequired,
  className: PropTypes.string,
};

Splash.defaultProps = {
  className: '',
};

export default withTheme(Splash);
