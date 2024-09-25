import { useQuery } from '@tanstack/react-query';
import { getJobs } from '../services/apiJobs';
import { useParams } from 'react-router-dom';
import { getJob } from '../services/apiJobs';

export const useJobs = () => {
  const { isLoading, data: jobs } = useQuery({
    queryKey: ['jobs'],
    queryFn: getJobs,
  });

  return { isLoading, jobs };
};

export const useJob = (path) => {
  const { jobId } = useParams();
  const { isLoading, data: job } = useQuery({
    queryKey: ['job', jobId],
    queryFn: () => getJob({ jobId, path }),
  });

  return { isLoading, job };
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
