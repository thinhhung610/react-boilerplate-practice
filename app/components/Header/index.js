/**
*
* Header
*
*/

import React from 'react';

import styles from './styles.css';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <header className={styles.header}>
        Hello world!!!
      </header>
    );
  }
}

export default Header;
