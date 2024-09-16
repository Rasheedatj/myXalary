import styles from './Status.module.scss';

const Status = ({ type, children }) => {
  return <div className={`${styles.status} ${styles[type]}`}>{children}</div>;
};

export default Status;
