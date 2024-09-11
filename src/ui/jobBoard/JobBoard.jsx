import JobDetails from '../../features/jobs/details/JobDetails';
import SideBar from '../sideBar/SideBar';
import styles from './JobBoard.module.scss';
import JobNav from '../jobNav/JobNav';

const JobBoard = () => {
  return (
    <section className={styles.parent}>
      <JobNav />

      <div>
        <SideBar />
        <JobDetails />
      </div>
    </section>
  );
};

export default JobBoard;
