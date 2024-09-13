import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; All rights reserved. Myxalary {new Date().getFullYear()}</p>

      <div className={styles.link}>
        <Link>Privacy policy</Link>
        <Link>Terms & Condition</Link>
      </div>

      <div className={styles.icons}>
        <Link to='https://www.facebook.com/ATB.Tech'>
          <FaFacebook />
        </Link>
        <Link to='https://twitter.com/ATBtechLtd'>
          <FaTwitter />
        </Link>
        <Link to='https://www.instagram.com/atb.tech/'>
          <FaInstagram />
        </Link>
        <Link to='https://www.linkedin.com/company/atb-tech'>
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
