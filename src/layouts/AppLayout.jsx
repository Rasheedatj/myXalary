import { Outlet } from 'react-router-dom';

const AppLayout = ({ children }) => {
  return (
    <div>
      appLayout
      <Outlet />
    </div>
  );
};

export default AppLayout;
