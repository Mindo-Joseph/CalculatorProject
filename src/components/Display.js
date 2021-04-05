/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React from 'react';

const Display = ({ result }) => (
  <div>
    {result}
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: 0,
};
export default Display;
