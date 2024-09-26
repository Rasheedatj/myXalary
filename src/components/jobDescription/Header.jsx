import { useLocation } from 'react-router-dom';
import Button from '../button/Button';
import styles from './Details.module.scss';
import { toggleBoard } from '../../redux/appSlice';
import { useDispatch } from 'react-redux';

const Header = ({ job }) => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <article className={styles.article}>
        <h1>
          <span onClick={() => dispatch(toggleBoard())}>&lt;</span> {job.title}
        </h1>
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

        <time>
          Date Posted: {job.datePosted.slice(0, 10).replaceAll('-', '/')}
        </time>
      </div>
    </header>
  );
};

export default Header;
