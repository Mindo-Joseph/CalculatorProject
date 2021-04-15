/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Navbar() {
  return (
    <div className={styles.header}>
      <h1>
        Math Magicians
      </h1>
      <div className={styles.navbar}>
        <Link to="/">Home </Link>
        <Link to="/calculator">Calculator </Link>
        <Link to="/quote">Quote </Link>
      </div>
    </div>

  );
}
export default Navbar;
