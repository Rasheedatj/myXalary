import List from '../list/List';
import styles from './Details.module.scss';
import {
  responsibilities,
  mustHaves,
  qualifications,
  benefits,
  aboutCompany,
  jobTitle,
  formatToNaira,
} from '../../utils';

const Description = () => {
  return (
    <div className={styles.description}>
      <h2 className={styles.h2}>Product Designer Job Description</h2>

      <article>
        <h3>Job Overview</h3>
        <p>{aboutCompany}</p>
      </article>

      <List
        heading={`responsibilities for ${jobTitle}`}
        list={responsibilities}
      />

      <List heading={`qualifications for ${jobTitle}`} list={qualifications} />
      <List heading='must haves' list={mustHaves} />
      <List heading='benefits of working with us' list={benefits} />
      <h3 className={styles.extras}>
        Required educational level: <span>Graduate</span>
      </h3>
      <h3 className={styles.extras}>
        experience level: <span>professional</span>
      </h3>
      <h3 className={styles.extras}>
        job type: <span>remote</span>
      </h3>
      <h3 className={styles.extras}>
        job role type: <span>fulltime</span>
      </h3>
      <h3 className={styles.extras}>
        location: <span>lagos, NGA</span>
      </h3>
      <h3 className={styles.extras}>
        salary:{' '}
        <span>
          {formatToNaira(450000)} - {formatToNaira(600000)}
        </span>
      </h3>
    </div>
  );
};

export default Description;
