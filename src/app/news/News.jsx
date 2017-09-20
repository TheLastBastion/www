import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import classNames from 'classnames';

import NewsPost from './NewsPost';

function News({ className }) {
  const blockClassName = classNames(css`
    display: flex;
    flex-direction: column;
  `, className);

  const newsPosts = [
    {
      id: 1,
      title: 'Welcome to the site!',
      content: (
        <div>
          <iframe title="space-battle" width="560" height="315" src="https://www.youtube.com/embed/c2BhzUfBEaw" frameBorder="0" allowFullScreen />
        </div>
      ),
    },
  ].map(newsPost => <NewsPost key={newsPost.id} newsPost={newsPost} />);

  return (
    <div className={blockClassName}>
      {newsPosts}
    </div>
  );
}

News.propTypes = {
  className: PropTypes.string,
};

News.defaultProps = {
  className: '',
};

export default News;
