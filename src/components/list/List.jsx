import styles from './List.module.scss';

const List = ({ heading, list, company, start, finish }) => {
  return (
    <article className={styles.jobDescription}>
      <div className='heading'>
        <h3>{heading}</h3>
        <p>{company}</p>
        <p>
          {start} {start && '-'} {finish}
        </p>
      </div>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
};

export default List;
