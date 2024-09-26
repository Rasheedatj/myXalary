import Footer from './Footer';
import Header from './Header';
import styles from './Details.module.scss';

import Description from './Description';
import { useJob } from '../../hooks/queryHooks';
import Spinner from '../spinner/Spinner';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const JobDetails = () => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];

  const { isLoading, job } = useJob(path);
  const { board } = useSelector((store) => store.app);

  if (isLoading) return <Spinner />;

  if (!job)
    return <p className={styles.noJob}>Please select a job to display</p>;

  return (
    <section
      className={`${!board ? styles.open : styles.close}  ${styles.details}`}
    >
      <Header job={job} />
      <Description job={job} />
      <Footer />
    </section>
  );
};

export default JobDetails;
