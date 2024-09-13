import styles from './List.module.scss';

const List = ({ heading, list }) => {
  return (
    <article className={styles.jobDescription}>
      <h3>{heading}</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
};

export default List;
