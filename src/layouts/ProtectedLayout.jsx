import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedLayout = () => {
  const { isAuthenticated } = useSelector((store) => store.profile);
  const navigate = useNavigate();

  console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) return navigate('/jobs');
  }, [isAuthenticated, navigate]);

  return <Outlet />;
};

export default ProtectedLayout;
