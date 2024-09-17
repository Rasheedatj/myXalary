import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../button/Button';
import Nav from './Nav';
import { login, logOut } from '../../redux/profileSlice';
import { openModal, toggleMenu } from '../../redux/appSlice';

const Header = () => {
  const { isAuthenticated } = useSelector((store) => store.profile);
  const { openMenu } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  return (
    <header className={`${openMenu ? styles.open : ''} ${styles.header}`}>
      <div className={`${!isAuthenticated ? styles.border : ''} ${styles.box}`}>
        <div className={styles.logoContainer}>
          <img src='/full-logo.svg' alt='myxalary logo' />
        </div>

        {/* show logout button if user is authenticated else show signin / login buttons */}
        <nav className={styles.btns}>
          {isAuthenticated ? (
            <Button
              type='primary'
              size='small'
              onClick={() => dispatch(logOut())}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                type='primary'
                size='small'
                onClick={() => {
                  dispatch(login());
                }}
              >
                Login
              </Button>
              <Button
                type='secondary'
                size='small'
                onClick={() => {
                  dispatch(openModal());
                }}
              >
                Signup
              </Button>
            </>
          )}
        </nav>

        <div
          className={styles.hamburger}
          onClick={() => dispatch(toggleMenu())}
        >
          {!openMenu ? (
            <img src='/menu.svg' alt='open menu' />
          ) : (
            <img src='/close-menu.svg' alt='open menu' />
          )}
        </div>
      </div>

      {/* show navbar if user is logged in */}
      {isAuthenticated && <Nav openMenu={openMenu} />}
    </header>
  );
};

export default Header;
