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
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </footer>
  );
};

export default Footer;
