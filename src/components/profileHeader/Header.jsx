import styles from './Header.module.scss';
import { AiOutlineEdit } from 'react-icons/ai';

const Header = ({ heading, onClick }) => {
  return (
    <header className={styles.header}>
      <h2>{heading}</h2>

      <button>
        <AiOutlineEdit />
        <span onClick={onClick}>edit</span>
      </button>
    </header>
  );
};

export default Header;
