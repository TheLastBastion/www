import React, { Component } from 'react';
import { css } from 'emotion';
import classNames from 'classnames';

const blockClassName = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 64px 0 0;

  .auth__buttons {
    display: flex;
    justify-content: space-between;
    margin: 48px;
  }

  .auth__button {
    background-color: red;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    margin: 32px;
    padding: 24px;
  }

  .auth__account {
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
  }

  .auth__account-header {
    margin: 0 0 32px;
  }

  .auth__account-content {
    margin: 0 32px;
    word-break: break-all;
  }
`;

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }


  getAccount = () => {
    fetch('https://localhost:3000/account', {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    }).then((res) => {
      if (res.status === 401) {
        this.setState({
          user: 'User not logged in.',
        });
        return;
      }

      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        res.json().then((data) => {
          this.setState({
            user: JSON.stringify(data),
          });
        });
      }
    });
  };

  login = () => {
    const authWindow = window.open('https://localhost:3000/auth/steam');
    const interval = window.setInterval(() => {
      if (authWindow == null || authWindow.closed) {
        window.clearInterval(interval);
      }
    }, 1000);
  };

  logout = () => {
    fetch('https://localhost:3000/logout', {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
    }).then(() => {
      this.setState({
        user: null,
      });
    });
  };

  render() {
    const className = classNames(blockClassName);
    return (
      <div className={className}>
        <div className="auth__buttons">
          <div tabIndex={-1} role="button" className="auth__button" onClick={this.login}>Login</div>
          <div tabIndex={-2} role="button" className="auth__button" onClick={this.logout}>Logout</div>
          <div tabIndex={-3} role="button" className="auth__button" onClick={this.getAccount}>Get Account</div>
        </div>
        <div className="auth__account">
          <h3 className="auth__account-header">{"User's Auth Information"}</h3>
          <div className="auth__account-content">{this.state.user}</div>
        </div>
      </div>
    );
  }
}

export default Auth;
