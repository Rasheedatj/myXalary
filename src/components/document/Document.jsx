import styles from './Document.module.scss';
import Header from '../profileHeader/Header';
import { Link } from 'react-router-dom';

const Document = () => {
  return (
    <div className={styles.box}>
      <Header heading='Documents' />

      <section className={styles.docs}>
        <div>
          <h1>PDF</h1>
          <h3>Ronke-bosola-resume.pdf</h3>
          <Link>View</Link>
        </div>
        <div>
          <h1>PDF</h1>
          <h3>Ronke-bosola-resume.pdf</h3>
          <Link>View</Link>
        </div>
        <div>
          <h1>PDF</h1>
          <h3>Ronke-bosola-resume.pdf</h3>
          <Link>View</Link>
        </div>
      </section>
    </div>
  );
};

export default Document;
