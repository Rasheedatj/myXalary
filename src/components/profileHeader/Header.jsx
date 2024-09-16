import { HiPencil } from 'react-icons/hi';
import styles from './Header.module.scss';
import { AiFillEdit } from 'react-icons/ai';

const Header = ({ heading, onClick }) => {
  return (
    <header className={styles.header}>
      <h2>{heading}</h2>

      <button>
        <AiFillEdit />
        <span onClick={onClick}>edit</span>
      </button>
    </header>
  );
};

export default Header;
