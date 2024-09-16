import { Outlet } from 'react-router-dom';
import JobNav from '../../components/jobNav/JobNav';
import styles from './JobLayout.module.scss';

const JobLayout = () => {
  return (
    <section className={styles.parent}>
      <JobNav />

      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default JobLayout;
