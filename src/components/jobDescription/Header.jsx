import { useLocation } from 'react-router-dom';
import Button from '../button/Button';
import styles from './Details.module.scss';

const Header = ({ job }) => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];

  return (
    <header className={styles.header}>
      <article className={styles.article}>
        <h1>{job.title}</h1>
        <p>
          {job.location} / {job.company} /{job.field}
        </p>
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

        <time>Date Posted: {job.datePosted}</time>
      </div>
    </header>
  );
};

export default Header;
