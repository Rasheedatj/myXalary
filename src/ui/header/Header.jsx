import styles from './Header.module.scss';

import Button from '../button/Button';
import Logo from '../logo/Logo';
import Nav from './Nav';
import { useSelector } from 'react-redux';

const Header = () => {
  const { isAuthenticated } = useSelector((store) => store.profile);
  return (
    <header className={styles.header}>
      <div className={`${!isAuthenticated ? styles.border : styles.box}`}>
        <Logo />

        {/* show logout button if user is authenticated else show signin / login buttons */}
        <div className={styles.btns}>
          {isAuthenticated ? (
            <Button type='primary'>Logout</Button>
          ) : (
            <>
              <Button type='primary'>Login</Button>
              <Button type='secondary'>Signup</Button>
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
