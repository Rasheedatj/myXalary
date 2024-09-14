import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const AppLayout = () => {
  return (
    <section>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default AppLayout;
