import { useLocation } from 'react-router-dom';
import Button from '../button/Button';
import styles from './Details.module.scss';

const Header = ({ title, company, location, field, date }) => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];

  return (
    <header className={styles.header}>
      <article className={styles.article}>
        <h1>Senior Product Designer</h1>
        <p>Lagos, NGA / ATB TECH /INFORMATION TECHNOLOGY</p>
      </article>

      <div className={styles.btn}>
        {path === 'jobs' && (
          <Button type='secondary' size='small'>
            Apply
          </Button>
        )}
        {path === 'applications' && (
          <div className={styles.applied}>Applied</div>
        )}
        {path === 'offers' && (
          <div className={styles.interview}>Invited for interview</div>
        )}

        <time>Date Posted: 20/07/2023</time>
      </div>
    </header>
  );
};

export default Header;
