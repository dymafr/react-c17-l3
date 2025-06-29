import React from 'react';
import { Link } from 'react-router';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <strong> React-router </strong>
      </div>
      <ul className={styles.headerList}>
        <Link to="/">Homepage</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/efzef">???</Link>
      </ul>
    </header>
  );
}

export default Header;
