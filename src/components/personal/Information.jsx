import styles from './Information.module.scss';
import Header from '../../components/profileHeader/Header';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Information = () => {
  return (
    <div className={styles.personalInfo}>
      <Header heading='Personal Information' />

      <figure>
        <img src='/profile pic.svg' alt='user' />

        <figcaption>
          <h3>Ronke Bosola</h3>
          <p>Product Designer</p>

          <span>
            <Link>
              <FaFacebook />
            </Link>
            <Link>
              <FaXTwitter />
            </Link>
            <Link>
              <FaLinkedinIn />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
          </span>
        </figcaption>
      </figure>
    </div>
  );
};

export default Information;
