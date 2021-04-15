/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home </Link>
      <Link to="/calculator">Calculator </Link>
      <Link to="/quote">Quote </Link>
    </div>
  );
}
export default Navbar;
