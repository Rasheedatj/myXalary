import styles from './Status.module.scss';

const Status = ({ type, children, onClick }) => {
  return (
    <div className={`${styles.status} ${styles[type]}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Status;
