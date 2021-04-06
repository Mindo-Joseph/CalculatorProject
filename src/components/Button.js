/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ name, clickHandler }) => (
  <button type="button" className="row" onClick={() => clickHandler(name)}>
    {name}
  </button>
);
Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,

};

export default Button;
