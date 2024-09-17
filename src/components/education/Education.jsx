import Header from '../profileHeader/Header';
import styles from './Education.module.scss';

const Education = () => {
  return (
    <div className={styles.box}>
      <Header heading='Education Information' />

      <section className={styles.education}>
        <article>
          <h3>International College of Design and Coding - Undergraduate </h3>
          <p>Bsc computer science</p>
          <p>2000 - 2003</p>
        </article>
        <article>
          <h3>International College of Design and Coding - Undergraduate </h3>
          <p>Bsc computer science</p>
          <p>2000 - 2003</p>
        </article>
      </section>
    </div>
  );
};

export default Education;
