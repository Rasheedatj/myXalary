import { Outlet } from 'react-router-dom';
import JobNav from '../../components/jobNav/JobNav';
import styles from './JobLayout.module.scss';
import JobDetails from '../../components/jobDescription/JobDetails';

const JobLayout = () => {
  return (
    <section className={styles.parent}>
      <JobNav />

      <main>
        <Outlet />
        <JobDetails />
      </main>
    </section>
  );
};

export default JobLayout;
