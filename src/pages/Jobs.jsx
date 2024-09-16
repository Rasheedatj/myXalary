import { useParams } from 'react-router-dom';

import SideBar from '../components/sideBar/SideBar';
import JobDetails from '../components/jobDescription/JobDetails';

const Jobs = () => {
  const modal = useParams();
  console.log(modal);
  return (
    <>
      <SideBar />
      <JobDetails />
    </>
  );
};

export default Jobs;
