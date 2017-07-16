import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classNames from 'classnames';

import ComingSoon from '../ComingSoon';

function Minecraft({ className }) {
  const blockClassName = classNames(css`
    display: flex;
    flex-direction: column;
  `, className);
  return (
    <ComingSoon className={blockClassName} sectionTitle="Minecraft" />
  );
}

Minecraft.propTypes = {
  className: PropTypes.string,
};

Minecraft.defaultProps = {
  className: '',
};

export default Minecraft;
