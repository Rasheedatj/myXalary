import Header from '../profileHeader/Header';
import styles from './Competence.module.scss';

const Competence = () => {
  return (
    <div className={styles.box}>
      <Header heading='Competencies and Tools' />

      <section>
        <article>
          <h3>Competencies</h3>
          <div>
            <span>Adobe illustrator</span>
            <span>figma</span>
            <span> illustrator</span>
            <span>photoshop</span>
            <span>sketch</span>
          </div>
        </article>

        <article>
          <h3>Tools</h3>
          <div>
            <span>Adobe illustrator</span>
            <span>figma</span>
            <span> illustrator</span>
            <span>photoshop</span>
            <span>sketch</span>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Competence;
