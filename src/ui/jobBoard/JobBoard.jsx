import SideBar from '../sideBar/SideBar';
import styles from './JobBoard.module.scss';
import JobNav from './JobNav';

const JobBoard = () => {
  return (
    <section className={styles.parent}>
      <JobNav />

      <div>
        <SideBar />
      </div>
    </section>
  );
};

export default JobBoard;
