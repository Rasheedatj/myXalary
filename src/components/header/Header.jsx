import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../../redux/appSlice';
import { logOut } from '../../redux/profileSlice';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import Nav from './Nav';

const Header = () => {
  const { isAuthenticated } = useSelector((store) => store.profile);
  const { openMenu } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  return (
    <header className={`${openMenu ? styles.open : ''} ${styles.header}`}>
      <div className={`${!isAuthenticated ? styles.border : ''} ${styles.box}`}>
        <Link to='jobs' className={styles.logoContainer}>
          <img src='/full-logo.svg' alt='myxalary logo' />
        </Link>

        {/* show logout button if user is authenticated else show signin / login buttons */}
        <nav className={styles.btns}>
          {isAuthenticated ? (
            <Button
              type='primary'
              size='small'
              onClick={() => {
                dispatch(logOut());
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Modal>
                <Modal.Open modalName='Login'>
                  <Button type='primary' size='small'>
                    Login
                  </Button>
                </Modal.Open>

                <Login />

                <Modal.Open modalName='Sign up'>
                  <Button type='secondary' size='small'>
                    Signup
                  </Button>
                </Modal.Open>

                <SignUp />
              </Modal>
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
