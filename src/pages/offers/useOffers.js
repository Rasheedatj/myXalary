import { useQuery } from '@tanstack/react-query';
import { getOffers } from '../../services/apiJobs';

export const useGetOffers = async () => {
  const { isLoading, data: offers } = useQuery({
    queryKey: ['offers'],
    queryFn: getOffers,
  });

  return { isLoading, offers };
};
