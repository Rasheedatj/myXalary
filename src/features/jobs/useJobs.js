import { useQuery } from '@tanstack/react-query';
import { getJobs } from '../../services/apiJobs';

export const useJobs = () => {
  const {
    isLoading,
    data: jobs,
    error,
  } = useQuery({
    queryKey: ['jobs'],
    queryFn: getJobs,
  });

  return { isLoading, error, jobs };
};
