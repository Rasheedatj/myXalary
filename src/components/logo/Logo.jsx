import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src='/full-logo.svg' alt='myxalary logo' />
    </div>
  );
};

export default Logo;
