import Footer from './Footer';
import Header from './Header';
import styles from './Details.module.scss';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { job } = useParams();
  return (
    <section className={styles.details}>
      <Header />
      <Footer />
    </section>
  );
};

export default JobDetails;
