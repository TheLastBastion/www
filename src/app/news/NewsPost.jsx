import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { withTheme } from 'theming';

class NewsPost extends PureComponent {
  render() {
    const { newsPost, theme } = this.props;
    const blockClassName = css`
      background-color: ${theme.colors.backgroundColorLight};
      display: flex;
      flex-direction: column;
      padding: 20px;

      .news-post__content {
        align-self: center;
      }
    `;

    return (
      <div className={blockClassName}>
        <h3>{newsPost.title}</h3>
        <div className="news-post__content">{newsPost.content}</div>
      </div>
    );
  }
}

NewsPost.propTypes = {
  newsPost: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.node,
  }).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape[{
      backgroundColorLight: PropTypes.string,
    }],
  }).isRequired,
};

export default withTheme(NewsPost);
