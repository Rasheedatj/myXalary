import BioData from '../../components/bioData/BioData';
import PersonalInformation from '../../components/personalInfo/PersonalInformation';
import Competence from '../../components/competence/Competence';
import About from '../../components/about/About';
import styles from './Profile.module.scss';
import Experience from '../../components/experience/Experience';
// import Education from '../../components/education/Education';
import Document from '../../components/document/Document';

const Profile = () => {
  return (
    <>
      <h1 className={styles.heading}>My Profile</h1>

      <section className={styles.gridContainer}>
        <PersonalInformation />
        <BioData />
        <Competence />
        <About />
        <Experience />
        {/* <Education /> */}
        <Document />
      </section>
    </>
  );
};

export default Profile;
