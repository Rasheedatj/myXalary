import styles from './Header.module.scss';
import { HiOutlineBookmark } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Status from '../status/Status';
import Button from '../button/Button';
import { toggleMenu } from '../../redux/appSlice';

const Nav = () => {
  const { profileScore } = useSelector((store) => store.profile);
  const { openMenu } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.navContainer} ${openMenu ? styles.active : ''}`}>
      <nav>
        <ul>
          <li>
            <NavLink
              to='jobs'
              onClick={() => dispatch(toggleMenu())}
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              <HiOutlineBookmark />

              <span>Jobs</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='applications'
              onClick={() => dispatch(toggleMenu())}
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              <HiOutlineBookmark />

              <span>My Applications</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='offers'
              onClick={() => dispatch(toggleMenu())}
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              <HiOutlineBookmark />

              <span>My Offers</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='profile'
              onClick={() => dispatch(toggleMenu())}
              className={({ isActive }) => (isActive ? `${styles.active}` : '')}
            >
              <HiOutlineBookmark />
              <span>My Profile</span>
            </NavLink>
          </li>
        </ul>

        <Button
          type='primary'
          size='small'
          // onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
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
