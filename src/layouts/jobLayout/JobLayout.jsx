import { Outlet, useParams } from 'react-router-dom';
import JobNav from '../../components/jobNav/JobNav';
import styles from './JobLayout.module.scss';
import JobDetails from '../../components/jobDescription/JobDetails';
import { useDispatch } from 'react-redux';
import { openBoard } from '../../redux/appSlice';
import { useEffect } from 'react';

const JobLayout = () => {
  const { jobId } = useParams();
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (jobId) dispatch(openBoard());
    },
    [jobId, dispatch]
  );

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
