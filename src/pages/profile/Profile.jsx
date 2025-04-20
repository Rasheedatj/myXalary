import About from '../../components/about/About';
import BioData from '../../components/bioData/BioData';
import Competence from '../../components/competence/Competence';
import Document from '../../components/document/Document';
import Education from '../../components/education/Education';
import Experience from '../../components/experience/Experience';
import Information from '../../components/personal/Information';
import AppLayout from '../../layouts/appLayout/AppLayout';
import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <AppLayout>
      <h1 className={styles.heading}>My Profile</h1>

      <section className={styles.gridContainer}>
        <Information />
        <BioData />
        <Competence />
        <About />
        <Experience />
        <Education />
        <Document />
      </section>
    </AppLayout>
  );
};

export default Profile;
