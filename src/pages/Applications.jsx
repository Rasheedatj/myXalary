import SideBar from '../components/sideBar/SideBar';
import Spinner from '../components/spinner/Spinner';
import { useApplications } from '../hooks/queryHooks';

const Applications = () => {
  const { isLoading, applications } = useApplications();

  if (isLoading) return <Spinner />;

  return <SideBar jobs={applications} />;
};

export default Applications;
