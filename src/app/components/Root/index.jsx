import * as React from 'react';
import { Link } from 'react-router';

import styles from './style.css';

export default class Root extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <nav className={styles.menu}>
          <Link to='/' className={styles['menu-link']}>Home</Link>
          <Link to='/page' className={styles['menu-link']}>Page</Link>
        </nav>
        <main className={styles.content}>
          {this.props.children}
        </main>
      </div>
    )
  };

};