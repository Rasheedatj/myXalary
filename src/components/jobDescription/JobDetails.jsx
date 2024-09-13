import Footer from './Footer';
import Header from './Header';
import styles from './Details.module.scss';
import { useParams } from 'react-router-dom';
import Description from './Description';

const JobDetails = () => {
  const { jobId } = useParams();
  console.log(jobId);
  return (
    <section className={styles.details}>
      <Header />
      <Description />
      <Footer />
    </section>
  );
};

export default JobDetails;
