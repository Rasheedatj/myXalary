import styles from './personalInformation.module.scss';
import Header from '../profileHeader/Header';

const PersonalInformation = () => {
  return (
    <div className={styles.box}>
      <Header heading='Personal Information' />
    </div>
  );
};

export default PersonalInformation;
