import { useMutation } from '@tanstack/react-query';
import { login } from '../services/auth';

export const useLogin = () => {
  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: login,
    mutationKey: ['login'],
  });

  return { isPending, loginUser };
};
