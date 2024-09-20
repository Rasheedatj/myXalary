import Footer from './Footer';
import Header from './Header';
import styles from './Details.module.scss';
import { useParams } from 'react-router-dom';
import Description from './Description';

const JobDetails = () => {
  // 1. use jobId to fetch the job description from the backend
  // 2. save job title, company, location, field and date into and obj and pass it into header
  // 3. pass the job object into description
  const { jobId } = useParams();
  return (
    <section className={styles.details}>
      <Header />
      <Description />
      <Footer />
    </section>
  );
};

export default JobDetails;
