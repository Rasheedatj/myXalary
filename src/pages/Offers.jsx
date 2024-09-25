import SideBar from '../components/sideBar/SideBar';
import Spinner from '../components/spinner/Spinner';
import { useOffers } from '../hooks/queryHooks';

const Offers = () => {
  const { isLoading, offers } = useOffers();

  if (isLoading) return <Spinner />;
  return <SideBar jobs={offers} />;
};

export default Offers;
