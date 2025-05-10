import { useForm } from 'react-hook-form';
import Button from '../button/Button';
import Input from '../input/Input';
import Modal from '../modal/Modal';
import Status from '../status/Status';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/profileSlice';
import { useLogin } from '../../hooks/auth';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Login = () => {
  const loginSchema = z.object({
    email: z.string().nonempty('Email is required').email(),
    password: z
      .string()
      .min(5, 'Password must be at least 5 characters')
      .nonempty('Password is required'),
  });

  const { isPending, loginUser } = useLogin();
  const { handleSubmit, register, reset, formState } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { errors } = formState;
  const dispatch = useDispatch();

  const onsubmit = (values) => {
    loginUser(
      { email: values.email, password: values.password },
      {
        onSuccess: (data) => {
          dispatch(login(data));
          reset();
        },
        onError: (error) => {
          alert(error.message);
        },
      }
    );
  };

  return (
    <Modal.Window modalName='Login'>
      <Modal.Header>
        <Modal.Open modalName='Sign up'>
          <Status type='purpleSecondary'>
            Don&apos;t have an account? &nbsp; sign up
          </Status>
        </Modal.Open>
      </Modal.Header>

      <main>
        <article>
          <h2>Login to apply to jobs</h2>
          <p>
            There is no limit to what you can achieve. Login to start applying
            to jobs now.
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

          <Button type={isPending ? 'loading' : 'primary'} size='medium'>
            {isPending ? 'Processing, please wait...' : 'Login'}
          </Button>
        </form>
      </main>
    </Modal.Window>
  );
};

export default Login;
