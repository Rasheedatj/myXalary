import Button from '../button/Button';
import styles from './Details.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Button type='secondary' size='small'>
        Apply
      </Button>
    </footer>
  );
};

export default Footer;
