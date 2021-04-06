/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React from 'react';

const Display = ({ total, next, operation }) => (
  <div>
    <p>{next || total}</p>
    <span>
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
