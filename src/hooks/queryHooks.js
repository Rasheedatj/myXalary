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

  return { isLoading, jobs };
};

export const useApplications = () => {
  const {
    isLoading,
    data: applications,
    error,
  } = useQuery({
    queryKey: ['applications'],
    queryFn: getJobs,
  });

  return { isLoading, applications };
};

export const useOffers = () => {
  const {
    isLoading,
    data: offers,
    error,
  } = useQuery({
    queryKey: ['offers'],
    queryFn: getJobs,
  });

  return { isLoading, offers };
};

export const useProfile = () => {
  const {
    isLoading,
    data: profile,
    error,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: getJobs,
  });

  return { isLoading, profile };
};
