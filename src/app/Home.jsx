import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classNames from 'classnames';

import ComingSoon from './ComingSoon';

function Home({ className }) {
  const blockClassName = classNames(css`
    display: flex;
    flex-direction: column;
  `, className);
  return (
    <ComingSoon className={blockClassName} sectionTitle="Home" />
  );
}

Home.propTypes = {
  className: PropTypes.string,
};

Home.defaultProps = {
  className: '',
};

export default Home;
