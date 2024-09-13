import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../button/Button';
import Logo from '../logo/Logo';
import Nav from './Nav';
import { logOut } from '../../redux/profileSlice';
import { openModal } from '../../redux/appSlice';

const Header = () => {
  const { isAuthenticated } = useSelector((store) => store.profile);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={`${!isAuthenticated ? styles.border : ''} ${styles.box}`}>
        <Logo />

        {/* show logout button if user is authenticated else show signin / login buttons */}
        <div className={styles.btns}>
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
                  dispatch(openModal());
                }}
              >
                Login
              </Button>
              <Button type='secondary' size='small'>
                Signup
              </Button>
            </>
          )}
        </div>
      </div>

      {/* show nav bar if user is logged in */}
      {isAuthenticated && <Nav />}
    </header>
  );
};

export default Header;
