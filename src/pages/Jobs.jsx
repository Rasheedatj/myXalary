import SideBar from '../components/sideBar/SideBar';
import Spinner from '../components/spinner/Spinner';
import { useJobs } from '../hooks/queryHooks';
import JobLayout from '../layouts/jobLayout/JobLayout';

const Jobs = () => {
  const { isLoading, jobs } = useJobs();

  if (isLoading) return <Spinner />;

  return (
    <JobLayout>
      <SideBar jobs={jobs} />
    </JobLayout>
  );
};

export default Jobs;
