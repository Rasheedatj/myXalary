import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Spinner;
