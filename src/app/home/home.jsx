import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ComingSoon from '../coming-soon/coming-soon';

import './home.scss';

function Home({ className }) {
  const blockClassName = classNames('home', className);
  return (
    <div className={blockClassName}>
      <h2>This is the home page</h2>
      <ComingSoon className="home__coming-soon" />
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string,
};

Home.defaultProps = {
  className: '',
};

export default Home;
