import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/apiJobs';

export const useGetProfile = async () => {
  const { isLoading, data: profile } = useQuery({
    queryKey: ['userProfile'],
    queryFn: getUser,
  });

  return { isLoading, profile };
};
