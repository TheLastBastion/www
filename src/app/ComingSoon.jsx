import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classNames from 'classnames';

function ComingSoon({ className, sectionTitle }) {
  const blockClassName = classNames(css`
    align-items: center;
    background-color: #fc0;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 32px 0 0;

    .text {
      font-size: 20px;
    }
  `, className);

  return (
    <div className={blockClassName}>
      <h1>{sectionTitle}</h1>
      <span className="text">Coming Soon!</span>
    </div>
  );
}

ComingSoon.propTypes = {
  className: PropTypes.string,
  sectionTitle: PropTypes.string,
};

ComingSoon.defaultProps = {
  className: '',
  sectionTitle: 'no title given',
};

export default ComingSoon;
