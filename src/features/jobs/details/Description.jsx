import styles from './Details.module.scss';

const Description = () => {
  return (
    <div className={styles.description}>
      <h2 className={styles.h2}>Product Designer Job Description</h2>

      <article className={styles.article}>
        <h3>Job Overview</h3>
        <p>
          ATB Techsoft Solutions Limited, a leading firm in Information
          Technology industry in the metro area. We&apos;re pleased to have a
          4.0 Glassdoor rating. We are looking to hire an experienced Product
          Designer to help us keep growing. If you&apos;re hard-working and
          dedicated, ATB Techsoft Solutions Limited, is an ideal place to get
          ahead. Apply today!
        </p>
      </article>

      <article className={styles.responsibilities}>
        <h3>Responsibilities</h3>
        <ul>
          <li>
            Create design concepts and drawings to determine the best product
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Description;
