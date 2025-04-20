import SideBar from '../components/sideBar/SideBar';
import Spinner from '../components/spinner/Spinner';
import { useApplications } from '../hooks/queryHooks';
import JobLayout from '../layouts/jobLayout/JobLayout';

const Applications = () => {
  const { isLoading, applications } = useApplications();

  if (isLoading) return <Spinner />;

  return (
    <JobLayout>
      <SideBar jobs={applications} />
    </JobLayout>
  );
};

export default Applications;
