/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

const Display = ({ total, next, operation }) => (
  <div className={styles.display}>
    <p className="">{next || total}</p>
    <span className={styles.displaySubtitle}>
      {next && (total || null)}
      {' '}
      {operation || null}
    </span>
  </div>
);

Display.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};
Display.defaultProps = {
  total: '0',
  next: undefined,
  operation: undefined,
};
export default Display;
