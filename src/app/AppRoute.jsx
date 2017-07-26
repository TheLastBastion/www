import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { css } from 'emotion';

const AppRoute = ({ component: RouteComponent, ...rest }) => {
  const blockClassName = css`
    flex: 1 1 auto;
  `;

  return (
    <Route
      {...rest}
      render={props => (
        <RouteComponent className={blockClassName} {...props} />
      )}
    />
  );
};

AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default AppRoute;
