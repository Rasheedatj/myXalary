import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import styles from './AppLayout.module.scss';

const AppLayout = ({ children }) => {
  return (
    <section className={styles.section}>
      <Header />

      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default AppLayout;
