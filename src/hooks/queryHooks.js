import { useQuery } from '@tanstack/react-query';
import {
  getApplications,
  getJobs,
  getOffers,
  getUser,
} from '../services/apiJobs';
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
  const { isLoading, data: applications } = useQuery({
    queryKey: ['applications'],
    queryFn: getApplications,
  });

  return { isLoading, applications };
};

export const useOffers = () => {
  const { isLoading, data: offers } = useQuery({
    queryKey: ['offers'],
    queryFn: getOffers,
  });

  return { isLoading, offers };
};

export const useProfile = () => {
  const { isLoading, data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getUser,
  });

  return { isLoading, profile };
};
