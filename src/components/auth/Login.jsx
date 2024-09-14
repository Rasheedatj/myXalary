import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import Button from '../button/Button';
import Input from '../input/Input';
import Modal from '../modal/Modal';
import { login } from '../../redux/profileSlice';
import Status from '../status/Status';

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const onSubmit = () => {
    dispatch(login());
    reset();
  };

  return (
    <Modal submitFn={handleSubmit(onSubmit)}>
      <header>
        <p>Login</p>

        <Status type='purpleSecondary'>
          Don&apos;t have an account? &nbsp; sign up
        </Status>
      </header>

      <main>
        <article>
          <h2>Login to apply to jobs</h2>
          <p>
            There is no limit to what you can achieve. Login to start applying
            to jobs now.
          </p>
        </article>

        <div>
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
          <Button type='primary' size='medium'>
            Login
          </Button>
        </div>
      </main>
    </Modal>
  );
};

export default Login;
