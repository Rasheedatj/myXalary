import { Outlet } from 'react-router-dom';

import styles from './AppLayout.module.scss';

const AppLayout = ({ children }) => {
  return (
    <div>
      appLayout
      <Outlet />
    </div>
  );
};

export default AppLayout;
