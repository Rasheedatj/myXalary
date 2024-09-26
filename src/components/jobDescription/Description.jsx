import List from '../list/List';
import styles from './Details.module.scss';
import { formatToNaira } from '../../utils';

const Description = ({ job }) => {
  return (
    <div className={styles.description}>
      <h2 className={styles.h2}>{job.title} Job Description</h2>

      <article>
        <h3>Job Overview</h3>
        <p>{job.overview}</p>
      </article>

      <List
        heading={`responsibilities for ${job.title}`}
        list={job.responsibilities}
      />

      <List
        heading={`qualifications for ${job.title}`}
        list={job.qualifications}
      />
      <List heading='must haves' list={job.mustHaves} />
      <List heading='benefits of working with us' list={job.benefits} />
      <h3 className={styles.extras}>
        Required educational level: <span>{job.educationLevel}</span>
      </h3>
      <h3 className={styles.extras}>
        experience level: <span>{job.experienceLevel}</span>
      </h3>
      <h3 className={styles.extras}>
        job type: <span>{job.type}</span>
      </h3>
      <h3 className={styles.extras}>
        job role type: <span>{job.roleType}</span>
      </h3>
      <h3 className={styles.extras}>
        location: <span>{job.location}</span>
      </h3>
      <h3 className={styles.extras}>
        salary:{' '}
        <span>
          {job.salary.length > 1
            ? ` ${formatToNaira(job.salary[0])} - ${formatToNaira(
                job.salary[1]
              )}`
            : formatToNaira(job.salary)}
        </span>
      </h3>
    </div>
  );
};

export default Description;
