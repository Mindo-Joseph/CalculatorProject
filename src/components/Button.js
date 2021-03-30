/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <div>
      Stuff goes here
      {' '}
      {props.name}
    </div>
  );
}
Button.propTypes = {
  name: PropTypes.string,

};
Button.defaultProps = {
  name: '',
};

export default Button;
