import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ComingSoon from './coming-soon';

import './gallery.scss';

function Gallery({ className }) {
  const blockClassName = classNames('gallery', className);
  return (
    <div className={blockClassName}>
      <h2>This is the gallery page</h2>
      <ComingSoon className="gallery__coming-soon" />
    </div>
  );
}

Gallery.propTypes = {
  className: PropTypes.string,
};

Gallery.defaultProps = {
  className: '',
};

export default Gallery;
