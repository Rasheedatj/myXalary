import Button from '../../../ui/button/Button';
import styles from './Details.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <article className={styles.article}>
        <h1>Senior Product Designer</h1>
        <p>Lagos, NGA / ATB TECH /INFORMATION TECHNOLOGY</p>
      </article>

      <div className={styles.btn}>
        <Button type='secondary'>Apply</Button>
        <time>Date Posted: 20/07/2023</time>
      </div>
    </header>
  );
};

export default Header;
