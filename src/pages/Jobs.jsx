import SideBar from '../components/sideBar/SideBar';
import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';
import { useSelector } from 'react-redux';
import { useJobs } from '../hooks/queryHooks';
import Spinner from '../components/spinner/Spinner';

const Jobs = () => {
  const { activeModal } = useSelector((store) => store.app);
  const { isLoading, jobs } = useJobs();

  if (isLoading) return <Spinner />;

  return (
    <>
      <SideBar jobs={jobs} />

      {activeModal === 'login' && <Login />}
      {activeModal === 'signup' && <SignUp />}
    </>
  );
};

export default Jobs;
