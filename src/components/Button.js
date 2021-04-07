/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

const Button = ({
  name, clickHandler, wide, color,
}) => (
  <button
    type="button"
    className={`${styles.button}
  ${color ? null : styles.button_gray}
  ${wide ? styles.button_double : null}`}
    onClick={() => clickHandler(name)}
  >
    {name}
  </button>
);
Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.bool,

};
Button.defaultProps = {
  color: false,
  wide: false,
};
export default Button;
