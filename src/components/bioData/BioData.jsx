import styles from './BioData.module.scss';
import Header from '../profileHeader/Header';

const BioData = () => {
  return (
    <div className={styles.bioData}>
      <Header heading='Biodata Information' />

      <div>
        <h4>Phone:</h4>
        <p>0812345678</p>
      </div>

      <div>
        <h4>Email:</h4>
        <p className={styles.email}>ronkeBosola@gmail.com</p>
      </div>

      <div>
        <h4>Birthday:</h4>
        <p>24th, june 1990</p>
      </div>

      <div>
        <h4>Address:</h4>
        <p>16, Sunday Monday Ave, Ikeja Lagos, Nigeria.</p>
      </div>
      <div>
        <h4>Gender:</h4>
        <p>Female</p>
      </div>
      <div>
        <h4>Location:</h4>
        <p>Gbagada Lagos NGA</p>
      </div>
    </div>
  );
};

export default BioData;
