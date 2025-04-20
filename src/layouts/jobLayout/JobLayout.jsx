import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import JobDetails from '../../components/jobDescription/JobDetails';
import JobNav from '../../components/jobNav/JobNav';
import { closeBoard, openBoard } from '../../redux/appSlice';
import AppLayout from '../appLayout/AppLayout';
import styles from './JobLayout.module.scss';

const JobLayout = ({ children }) => {
  const { jobId } = useParams();
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (jobId) dispatch(openBoard());
      else dispatch(closeBoard());
    },
    [jobId, dispatch]
  );

  return (
    <AppLayout>
      <section className={styles.parent}>
        <JobNav />

        <main>
          {children}
          <JobDetails />
        </main>
      </section>
    </AppLayout>
  );
};

export default JobLayout;
