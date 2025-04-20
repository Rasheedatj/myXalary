import SideBar from '../components/sideBar/SideBar';
import Spinner from '../components/spinner/Spinner';
import { useOffers } from '../hooks/queryHooks';
import JobLayout from '../layouts/jobLayout/JobLayout';

const Offers = () => {
  const { isLoading, offers } = useOffers();

  if (isLoading) return <Spinner />;
  return (
    <JobLayout>
      <SideBar jobs={offers} />
    </JobLayout>
  );
};

export default Offers;
