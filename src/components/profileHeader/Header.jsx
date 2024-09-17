import styles from './Header.module.scss';
import { AiOutlineEdit } from 'react-icons/ai';
import { HiArrowUpTray } from 'react-icons/hi2';

const Header = ({ heading, onClick, action }) => {
  return (
    <header className={styles.header}>
      <h2>{heading}</h2>

      <button>
        {action === 'upload' ? (
          <>
            <HiArrowUpTray />
            <span onClick={onClick}>update</span>
          </>
        ) : (
          <>
            <AiOutlineEdit />
            <span onClick={onClick}>edit</span>
          </>
        )}
      </button>
    </header>
  );
};

export default Header;
