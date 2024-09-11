import styles from './Header.module.scss';
import { HiOutlineBookmark } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const { profileScore } = useSelector((store) => store.profile);

  return (
    <div className={styles.navContainer}>
      <nav>
        <ul>
          <li>
            <NavLink
              to='jobs'
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              <HiOutlineBookmark />

              <span>Jobs</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='applications'
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              <HiOutlineBookmark />

              <span>My Applications</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='offers'
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              <HiOutlineBookmark />

              <span>My Offers</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='profile'
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              <HiOutlineBookmark />
              <span>My Profile</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <div
          className={`${styles.profile} ${
            profileScore === 100 ? styles.completed : ''
          }`}
        >
          Profile score: {profileScore}%
        </div>

        {profileScore < 100 && (
          <div className={styles.alert}>Complete your profile</div>
        )}

        <figure>
          <figcaption>Jane Joe</figcaption>
          <img src='/user.svg' alt='user avatar' />
        </figure>
      </div>
    </div>
  );
};

export default Nav;
