import SideBar from '../components/sideBar/SideBar';
import JobDetails from '../components/jobDescription/JobDetails';
import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';
import { useSelector } from 'react-redux';

const Jobs = () => {
  const { activeModal } = useSelector((store) => store.app);
  return (
    <>
      <SideBar />
      <JobDetails />

      {activeModal === 'login' && <Login />}
      {activeModal === 'signup' && <SignUp />}
    </>
  );
};

export default Jobs;
