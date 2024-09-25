import Footer from './Footer';
import Header from './Header';
import styles from './Details.module.scss';

import Description from './Description';
import { useJob } from '../../hooks/queryHooks';
import Spinner from '../spinner/Spinner';
import { useLocation } from 'react-router-dom';

const JobDetails = () => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];

  const { isLoading, job } = useJob(path);

  if (isLoading) return <Spinner />;

  if (!job) return <p>Please select a job</p>;

  return (
    <section className={styles.details}>
      <Header job={job} />
      <Description job={job} />
      <Footer />
    </section>
  );
};

export default JobDetails;
