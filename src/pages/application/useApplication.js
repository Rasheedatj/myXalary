import { useQuery } from '@tanstack/react-query';
import { getApplications } from '../../services/apiJobs';

export const useGetApplications = async () => {
  const { isLoading, data: applications } = useQuery({
    queryKey: ['applications'],
    queryFn: getApplications,
  });

  return { isLoading, applications };
};
