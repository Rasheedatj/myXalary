import { useForm } from 'react-hook-form';
import Button from '../button/Button';
import Input from '../input/Input';
import Modal from '../modal/Modal';
import Status from '../status/Status';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/profileSlice';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const signupSchema = z
    .object({
      email: z
        .string()
        .nonempty('Email is required')
        .email('Invalid email address'),
      password: z
        .string()
        .nonempty('Password is required')
        .min(5, 'Password must be at least 5 characters'),
      confirmPassword: z
        .string()
        .nonempty('Password is required')
        .min(5, 'Password must be at least 5 characters'),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onsubmit = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    dispatch(login({ username: 'emilys', password: 'emilyspass' }));

    reset();
  };

  return (
    <Modal.Window modalName='Sign up'>
      <Modal.Header>
        <Modal.Open modalName='Login'>
          <Status type='pinkSecondary'>
            Already have an account? &nbsp; Login
          </Status>
        </Modal.Open>
      </Modal.Header>
      <main>
        <article>
          <h2>Signup to apply to jobs</h2>
          <p>
            We need certain one time information which will make the employer
            able to evaluate your CV. It will make it easier for us to send your
            profile to employers and for employers to have a thorough review of
            your profile.
          </p>
        </article>

        <form onSubmit={handleSubmit(onsubmit)}>
          <Input
            type='email'
            label='email address'
            id='email'
            register={register}
            error={errors?.email?.message}
          />
          <Input
            type='password'
            label='password'
            id='password'
            register={register}
            error={errors?.password?.message}
          />
          <Input
            type='password'
            label='Confirm Password'
            id='confirmPassword'
            register={register}
            error={errors?.confirmPassword?.message}
          />

          <Button type={isLoading ? 'loading' : 'primary'} size='medium'>
            {isLoading ? 'Processing, please wait...' : 'Signup'}
          </Button>
        </form>
      </main>
    </Modal.Window>
  );
};

export default SignUp;
