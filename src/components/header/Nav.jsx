import styles from './Header.module.scss';
import { HiOutlineBookmark } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Status from '../status/Status';

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
        <Status
          type={
            profileScore === 100
              ? 'completed'
              : profileScore === 0
              ? 'zero'
              : 'incomplete'
          }
        >
          Profile score: {profileScore}%
        </Status>

        {profileScore < 100 && (
          <Status type='alert'>Complete your profile</Status>
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
