/* eslint-disable max-len */
import Navbar from './Navbar';
import styles from './styles.module.css';

function Home() {
  return (
    <div>
      <div className={styles.header}>
        <h1>
          Math Magicians
        </h1>
        <Navbar />
      </div>
      <div className="content">
        <h3>Welcome to our site</h3>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

    </div>
  );
}
export default Home;
